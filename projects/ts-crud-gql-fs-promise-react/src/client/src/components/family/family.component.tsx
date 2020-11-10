import React, { memo } from 'react';
import MaterialLoader from '../loader/MaterialLoader';
import { family, family_family_members } from './__generated__/family';
import { ApolloError } from '@apollo/client/errors';

type FamilyProps = {
    data: family;
    loading: boolean;
    error?: ApolloError;
    onRemove?: (member: family_family_members) => void;
};

const Family = memo<FamilyProps>(({ data, loading, error, onRemove }) => {
    if (loading) return <MaterialLoader />;
    if (error) return <p>ERROR</p>;
    if (!data) return <p>Not found</p>;

    return (
        <>
            <ul>
                {data.family?.members?.map(member => {
                    if (member) {
                        return (
                            <li key={member?.id}>
                                <p>
                                    Name: {member?.name} Age: {member?.age}
                                </p>
                                <button type="button" onClick={() => onRemove && onRemove(member)}>
                                    Remove
                                </button>
                            </li>
                        );
                    }

                    return null;
                })}
            </ul>
        </>
    );
});

export default Family;
