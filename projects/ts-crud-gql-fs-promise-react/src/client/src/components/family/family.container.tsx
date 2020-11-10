import React, { memo, useCallback } from 'react';
import { gql, Reference, useMutation, useQuery } from '@apollo/client';
import MaterialLoader from '../loader/MaterialLoader';
import { family, family_family_members } from './__generated__/family';
import Family from './family.component';

type FamilyContainerProps = {};

// так делаю гет запрос
export const GET_FAMILY = gql`
    query GET_FAMILY {
        family {
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

const FamilyContainer = memo<FamilyContainerProps>(() => {
    const { data, loading, error } = useQuery<family>(
        GET_FAMILY
        // { fetchPolicy: 'network-only' }
    );
    console.log('GET_FAMILY ', data);

    const { data: cachedFamily } = useQuery<family>(GET_CACHED_FAMILY);
    console.log('GET_CACHED_FAMILY ', cachedFamily);

    const [removeMember, { data: dataAfterRemove }] = useMutation(DELETE_FAMILY_MEMBER, {
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
    });

    console.log('DELETE_FAMILY_MEMBER ', dataAfterRemove);

    const onRemove = useCallback(
        (member: family_family_members) => {
            removeMember({ variables: { id: member.id } });
        },
        [removeMember]
    );

    if (loading) return <MaterialLoader />;
    if (error) return <p>ERROR</p>;
    if (!data) return <p>Not found</p>;

    return (
        <>
            <Family onRemove={onRemove} data={data} loading={loading} error={error} />
        </>
    );
});

export default FamilyContainer;
