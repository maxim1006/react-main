import React, { memo } from 'react';
import { ApolloError } from '@apollo/client/errors';
import MaterialLoader from '../../loader/MaterialLoader';
import Skill from '../skill.component';
import { GetSkillsQuery } from '../../../generated/operations';
import { ArrayType } from '../../../models/common.model';

type SkillListProps = {
    data: NonNullable<GetSkillsQuery['skills']>['items'];
    loading?: boolean;
    error?: ApolloError;
    onRemove?: (skill: ArrayType<NonNullable<GetSkillsQuery['skills']>['items']>) => void;
    onUpdate?: (skill: ArrayType<NonNullable<GetSkillsQuery['skills']>['items']>) => void;
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
