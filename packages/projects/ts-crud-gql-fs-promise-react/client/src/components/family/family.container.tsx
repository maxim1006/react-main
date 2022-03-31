import React, { memo, useCallback } from 'react';
import { gql, Reference, useMutation } from '@apollo/client';
import MaterialLoader from '../loader/MaterialLoader';
import Family from './family.component';
import { commonUtilsOmitTypeName } from '../../common.utils';
import CreateFamilyMember from './create-member/create-family-member.component';
import {
    CreateFamilyMemberDocument,
    CreateFamilyMemberMutation,
    DeleteFamilyMemberDocument,
    DeleteFamilyMemberMutation,
    ErrorPartsFragment,
    FamilyMemberPartsFragment,
    UpdateFamilyMemberDocument,
    UpdateFamilyMemberMutation,
    useCreateFamilyMemberUniqueMutation,
    useGetCachedFamilyQuery,
    useGetFamilyQuery,
} from '../../generated/operations';

// тут все в одном файле для простоты восприятия, в проде разумеется надо разбивать
type FamilyContainerProps = {};

const FamilyContainer = memo<FamilyContainerProps>(() => {
    // const { data, loading, error, refetch } = useQuery<GetFamilyQuery>(
    //     GetFamilyDocument
    //     // { fetchPolicy: 'network-only' }
    // );
    // тоже что и
    const { data, loading, error, refetch } = useGetFamilyQuery({
        variables: {},
    });

    // const { data: cachedFamily } = useQuery<GetCachedFamilyQuery>(GetCachedFamilyDocument);

    const { data: cachedFamily } = useGetCachedFamilyQuery({
        variables: {},
    });

    const [
        createMember,
        { loading: createMemberLoading, error: createMemberError, data: dataAfterCreate },
    ] = useMutation<CreateFamilyMemberMutation>(CreateFamilyMemberDocument, {
        // ignore errors to show data
        // errorPolicy: 'ignore',
        update(cache, { data }) {
            const createFamilyMember = data?.createFamilyMember;

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

    const [
        createFamilyMemberUniqueMutation,
        { data: createFamilyMemberUniqueData },
    ] = useCreateFamilyMemberUniqueMutation({
        update(cache, { data }) {
            const newMember = data?.createFamilyMemberUnique;
            cache.modify({
                fields: {
                    family(existingCommentRefs) {
                        const newFamilyMemberRef = cache.writeFragment({
                            data: newMember,
                            fragment: gql`
                                fragment NewFamilyMember on FamilyMember {
                                    id
                                }
                            `,
                        });
                        return {
                            ...existingCommentRefs,
                            members: [...existingCommentRefs.members, newFamilyMemberRef],
                        };
                    },
                },
            });
        },
    });

    const [removeMember, { data: dataAfterDelete }] = useMutation<DeleteFamilyMemberMutation>(
        DeleteFamilyMemberDocument,
        {
            update(cache, { data }) {
                const deleteFamilyMember = data?.deleteFamilyMember;

                cache.modify({
                    fields: {
                        family(existingCommentRefs, { readField }) {
                            const members = existingCommentRefs.members.filter((i: Reference) => {
                                return readField('id', i) !== deleteFamilyMember?.id;
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
        }
    );
    const [updateMember, { data: dataAfterUpdate }] = useMutation<UpdateFamilyMemberMutation>(
        UpdateFamilyMemberDocument
    );

    // console.log('GET_FAMILY ', data);
    // console.log('GET_CACHED_FAMILY ', cachedFamily);
    // console.log('CREATE_FAMILY_MEMBER ', dataAfterCreate);
    // console.log('UPDATE_FAMILY_MEMBER ', dataAfterUpdate);
    // console.log('DELETE_FAMILY_MEMBER ', dataAfterDelete);

    const onCreate = useCallback(
        async ({ name, age }) => {
            try {
                await createFamilyMemberUniqueMutation({ variables: { name, age } });
            } catch (e) {
                console.error('FamilyContainer onCreate error ', e);
            }
        },
        [createFamilyMemberUniqueMutation]
    );

    const onUpdate = useCallback(
        (member: FamilyMemberPartsFragment) => {
            updateMember({ variables: { input: commonUtilsOmitTypeName(member) } });
        },
        [updateMember]
    );

    const onRemove = useCallback(
        (member: FamilyMemberPartsFragment) => {
            removeMember({ variables: { id: member.id } });
        },
        [removeMember]
    );

    if (loading || createMemberLoading) return <MaterialLoader />;
    if (error || createMemberError) return <p>ERROR</p>;
    if (!data) return <p>Not found</p>;

    // const errors = handleErrors([
    //     dataAfterCreate?.createFamilyMember?.errors,
    //     dataAfterUpdate?.updateFamilyMember?.errors,
    //     dataAfterDelete?.deleteFamilyMember?.errors,
    // ] as ErrorPartsFragment[]);

    return (
        <>
            <button type="button" onClick={() => refetch()}>
                Refetch family
            </button>
            <CreateFamilyMember onCreate={onCreate} />
            <Family onRemove={onRemove} onUpdate={onUpdate} data={data} loading={loading} error={error} />
            {/*<DataErrors errors={errors} />*/}
        </>
    );
});

export default FamilyContainer;

// helpers
function handleErrors(errors: ErrorPartsFragment[]) {
    const err: ErrorPartsFragment[] = [];

    if (errors) {
        errors.forEach(i => {
            if (Array.isArray(i)) {
                i.forEach((error: ErrorPartsFragment) => {
                    err.push(error);
                });
            }
        });
    }

    return err;
}

// raw requests
// export const GET_FAMILY = gql`
//     query GetFamily {
//         family {
//             id
//             members {
//                 id
//                 age
//                 name
//             }
//             errors {
//                 message
//                 field
//             }
//         }
//     }
// `;
//
// const DELETE_FAMILY_MEMBER = gql`
//     mutation DeleteFamilyMember($id: String!) {
//         deleteFamilyMember(id: $id) {
//             id
//             members {
//                 id
//                 age
//                 name
//             }
//             errors {
//                 message
//                 field
//             }
//         }
//     }
// `;
//
// const UPDATE_FAMILY_MEMBER = gql`
//     mutation UpdateFamilyMember($input: FamilyMemberInput!) {
//         updateFamilyMember(input: $input) {
//             id
//             members {
//                 id
//                 age
//                 name
//             }
//             errors {
//                 field
//                 message
//             }
//         }
//     }
// `;
//
// const CREATE_FAMILY_MEMBER = gql`
//     mutation CreateFamilyMember($name: String!, $age: Int!) {
//         createFamilyMember(name: $name, age: $age) {
//             id
//             members {
//                 id
//                 age
//                 name
//             }
//             errors {
//                 message
//                 field
//             }
//         }
//     }
// `;
