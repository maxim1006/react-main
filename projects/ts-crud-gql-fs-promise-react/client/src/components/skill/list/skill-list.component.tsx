import React, { memo } from 'react';
import { ApolloError } from '@apollo/client/errors';
import MaterialLoader from '../../loader/MaterialLoader';
import Skill from '../skill.component';

type SkillListProps = {
    data: any;
    loading: boolean;
    error?: ApolloError;
    onRemove?: () => void;
    onUpdate?: () => void;
};

const SkillList = memo<SkillListProps>(({ data, loading, error, onRemove, onUpdate }) => {
    if (loading) return <MaterialLoader />;
    if (error) return <p>ERROR</p>;
    if (!data) return <p>Not found</p>;

    return (
        <>
            <ul>
                {data.family?.members?.map(data => {
                    if (data) {
                        return (
                            <li key={data?.id}>
                                <Skill onUpdate={onUpdate} onRemove={onRemove} data={data} />
                            </li>
                        );
                    }

                    return null;
                })}
            </ul>
        </>
    );
});

export default SkillList;
