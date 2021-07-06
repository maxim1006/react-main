import React, { memo } from 'react';
import { IPlans } from '../../../../models/plans.model';
import { IPlan } from '../../../../models/plan.model';

const TodoPlans = ({ plans }: IPlans) => (
    <>
        <ul>
            {Object.keys(plans).map((planId: string, index: number) => {
                const { name, completed }: IPlan = plans[planId];
                return (
                    <li key={index}>
                        Name: {name} Completed: {completed}
                    </li>
                );
            })}
        </ul>
    </>
);

export default memo(TodoPlans);
