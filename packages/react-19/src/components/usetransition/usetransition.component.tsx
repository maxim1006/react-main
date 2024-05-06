import { FC, memo, useTransition } from 'react';
import { delay } from '../../utils/common.utils.ts';

type UseTransitionProps = NonNullable<unknown>;

const UseTransition: FC<UseTransitionProps> = () => {
    // transitions to handle pending states, errors, forms, and optimistic updates automatically.
    const [isPending, startTransition] = useTransition();

    // автоматом поймет pending state
    const handleClick = () => {
        startTransition(async () => {
            await fetch('https://jsonplaceholder.typicode.com/todos/1');
            await delay(1000);
        });
    };

    return <div onClick={handleClick}>isPending: {isPending + ''}</div>;
};

export default memo(UseTransition);
