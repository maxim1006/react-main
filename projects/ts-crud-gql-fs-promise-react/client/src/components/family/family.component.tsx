import React, { memo } from 'react';
import MaterialLoader from '../loader/MaterialLoader';
import { family, family_family_members } from './__generated__/family';
import { ApolloError } from '@apollo/client/errors';
import FamilyMember from './member/family-member.component';

type FamilyProps = {
    data: family;
    loading: boolean;
    error?: ApolloError;
    onRemove?: (member: family_family_members) => void;
    onUpdate?: (member: family_family_members) => void;
};

const Family = memo<FamilyProps>(({ data, loading, error, onRemove, onUpdate }) => {
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
                                <FamilyMember onUpdate={onUpdate} onRemove={onRemove} member={member} />
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
