import React, { memo } from 'react';
import { ApolloError } from '@apollo/client/errors';
import MaterialLoader from '../../loader/MaterialLoader';
import Skill from '../skill.component';
import { GetSkills_skills_items } from './__generated__/GetSkills';

type SkillListProps = {
    data: (GetSkills_skills_items | null)[] | null | undefined;
    loading?: boolean;
    error?: ApolloError;
    onRemove?: (skill: GetSkills_skills_items) => void;
    onUpdate?: (skill: GetSkills_skills_items) => void;
};

const SkillList = memo<SkillListProps>(({ data, loading, error, onRemove, onUpdate }) => {
    if (loading) return <MaterialLoader />;
    if (error) return <p>ERROR</p>;
    if (!data) return <p>Not found</p>;

    return (
        <>
            <ul>
                {data.map(data => {
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
