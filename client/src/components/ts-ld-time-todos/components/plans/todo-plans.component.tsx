import { memo } from 'react';
import { IPlans } from '@app/models/plans.model';
import { IPlan } from '@app/models/plan.model';

const TodoPlans = ({ plans }: IPlans) => (
    <ul>
        {Object.keys(plans).map((planId: string, index: number) => {
            const { name, completed }: IPlan = plans[planId];
            return (
                <li key={crypto.randomUUID()}>
                    Name: {name} Completed: {completed}
                </li>
            );
        })}
    </ul>
);

export default memo(TodoPlans);
