import { memo } from 'react';
import { IPlans } from '@app/models/plans.model';

const TodoPlans = ({ plans }: IPlans) => (
    <ul>
        {Object.keys(plans).map((planId: string, index: number) => {
            const plan = plans[planId];
            const { name, completed } = plan ?? {};

            return (
                <li key={crypto.randomUUID()}>
                    Name: {name} Completed: {completed}
                </li>
            );
        })}
    </ul>
);

export default memo(TodoPlans);
