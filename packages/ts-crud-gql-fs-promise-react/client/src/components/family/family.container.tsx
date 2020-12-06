import React, { memo, useCallback } from 'react';
import { gql, Reference, useMutation, useQuery } from '@apollo/client';
import MaterialLoader from '../loader/MaterialLoader';
import { GetFamily, GetFamily_family_members } from './__generated__/GetFamily';
import Family from './family.component';
import { commonUtilsOmitTypeName } from '../../common.utils';
import CreateFamilyMember from './create-member/create-family-member.component';
import DataErrors from '../errors/data/data-errors.component';
import { ErrorModel } from '../../models/error.model';
import { FamilyMemberFragment } from '../../gql/query/family/family.fragments';

// тут все в одном файле для простоты восприятия, в проде разумеется надо разбивать
type FamilyContainerProps = {};

// так делаю гет запрос
export const GET_FAMILY = gql`
    query GetFamily {
        family {
            members {
                ...FamilyMemberFragment
            }
            errors {
                message
                field
            }
        }
    }
    ${FamilyMemberFragment.fragments.main}
`;

// так могу забрать закешированные данные
export const GET_CACHED_FAMILY = gql`
    query GetCachedFamily {
        family @client {
            members {
                name
                age
                id
            }
            errors {
                message
                field
            }
        }
    }
`;

const DELETE_FAMILY_MEMBER = gql`
    mutation DeleteFamilyMember($id: String!) {
        deleteFamilyMember(id: $id) {
            deleted
            id
            errors {
                message
                field
            }
        }
    }
`;

// гкл может без измнений кеша заапдейтить только single entity, при этом обязательно должен передаваться id и
// проперти которые был проапдейчены
// https://www.apollographql.com/docs/react/data/mutations/#updating-a-single-existing-entity
const UPDATE_FAMILY_MEMBER = gql`
    mutation UpdateFamilyMember($input: FamilyMemberInput!) {
        updateFamilyMember(input: $input) {
            members {
                id
                age
                name
            }
            errors {
                field
                message
            }
        }
    }
`;

const CREATE_FAMILY_MEMBER = gql`
    mutation CreateFamilyMember($name: String!, $age: Int!) {
        createFamilyMember(name: $name, age: $age) {
            members {
                id
                age
                name
            }
            errors {
                field
                message
            }
        }
    }
`;

const FamilyContainer = memo<FamilyContainerProps>(() => {
    const { data, loading, error, refetch } = useQuery<GetFamily>(
        GET_FAMILY
        // { fetchPolicy: 'network-only' }
    );

    const { data: cachedFamily } = useQuery<GetFamily>(GET_CACHED_FAMILY);

    const [
        createMember,
        { loading: createMemberLoading, error: createMemberError, data: dataAfterCreate },
    ] = useMutation(CREATE_FAMILY_MEMBER, {
        // ignore errors to show data
        // errorPolicy: 'ignore',
        update(cache, { data: { createFamilyMember } }) {
            cache.modify({
                fields: {
                    family(existingCommentRefs) {
                        // add all family that get from BE to cache
                        // cache.writeQuery({
                        //     query: GET_FAMILY,
                        //     data: {
                        //         family: createFamilyMember,
                        //     },
                        // });

                        // самое смешное что если ничего не возврщать то тоже обновление будет, но будет доп запрос в getFamily
                        // а если вернуть кеш то не будет доп гет запроса
                        return createFamilyMember;
                    },
                },
            });
        },
    });
    const [removeMember, { data: dataAfterDelete }] = useMutation(DELETE_FAMILY_MEMBER, {
        update(cache, { data: { deleteFamilyMember } }) {
            cache.modify({
                fields: {
                    family(existingCommentRefs, { readField }) {
                        const members = existingCommentRefs.members.filter((i: Reference) => {
                            return readField('id', i) !== deleteFamilyMember.id;
                        });

                        // так могу получить реф к определенному типу
                        // const newFamilyRef = cache.writeQuery({
                        //     query: GET_FAMILY,
                        //     data: {
                        //         family,
                        //     },
                        // });

                        return {
                            ...existingCommentRefs,
                            members,
                        };
                    },
                },
            });
        },
        // а вот так если бы бе возвращал мембера
        // update(cache, { data: { createFamilyMember } }) {
        //     cache.modify({
        //         fields: {
        //             family(existingCommentRefs) {
        //                 const newFamilyMemberRef = cache.writeFragment({
        //                     data: createFamilyMember.member,
        //                     fragment: gql`
        //                         fragment NewFamilyMember on FamilyMember {
        //                             id
        //                             name
        //                             age
        //                         }
        //                     `
        //                 });
        //
        //                 return {
        //                     ...existingCommentRefs,
        //                     members: [...existingCommentRefs.members, newFamilyMemberRef]
        //                 };
        //             },
        //         },
        //     });
        // },
        // так на onCompleted
        // onCompleted({ createFamilyMember }) {
        //     console.log("onCompleted createFamilyMember ", createFamilyMember);
        //     cache.writeQuery({
        //         query: GET_FAMILY,
        //         data: {
        //             family: createFamilyMember,
        //         },
        //     });
        // },
    });
    const [updateMember, { data: dataAfterUpdate }] = useMutation(UPDATE_FAMILY_MEMBER);

    // console.log('GET_FAMILY ', data);
    // console.log('GET_CACHED_FAMILY ', cachedFamily);
    // console.log('CREATE_FAMILY_MEMBER ', dataAfterCreate);
    // console.log('UPDATE_FAMILY_MEMBER ', dataAfterUpdate);
    // console.log('DELETE_FAMILY_MEMBER ', dataAfterDelete);

    const onCreate = useCallback(
        ({ name, age }) => {
            createMember({ variables: { name, age } });
        },
        [createMember]
    );

    const onUpdate = useCallback(
        (member: GetFamily_family_members) => {
            updateMember({ variables: { input: commonUtilsOmitTypeName(member) } });
        },
        [updateMember]
    );

    const onRemove = useCallback(
        (member: GetFamily_family_members) => {
            removeMember({ variables: { id: member.id } });
        },
        [removeMember]
    );

    if (loading || createMemberLoading) return <MaterialLoader />;
    if (error || createMemberError) return <p>ERROR</p>;
    if (!data) return <p>Not found</p>;

    const errors = handleErrors([
        dataAfterCreate?.createFamilyMember?.errors,
        dataAfterUpdate?.updateFamilyMember?.errors,
        dataAfterDelete?.deleteFamilyMember?.errors,
    ]);

    return (
        <>
            <button type="button" onClick={() => refetch()}>
                Refetch family
            </button>
            <CreateFamilyMember onCreate={onCreate} />
            <Family onRemove={onRemove} onUpdate={onUpdate} data={data} loading={loading} error={error} />
            <DataErrors errors={errors} />
        </>
    );
});

export default FamilyContainer;

// helpers
function handleErrors(errors: ErrorModel[]) {
    const err: ErrorModel[] = [];

    errors.forEach(i => {
        if (Array.isArray(i)) {
            i.forEach((error: ErrorModel) => {
                err.push(error);
            });
        }
    });

    return err;
}
