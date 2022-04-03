import React, { FC, memo, useDeferredValue, useState, useTransition } from 'react';
import { generateRandomString } from '@app/common/utils/generate.utils';

type React18ConcurrentProps = {};

const React18Concurrent: FC<React18ConcurrentProps> = () => {
    const [state, setState] = useState(() => generateData());
    const [isPending, startTransition] = useTransition();
    const deferredValue = useDeferredValue(state); // тоже что и useTransition только не надо делать startTransition

    // const id = useId();
    // const id1 = useId();
    // const id2 = useId();
    //
    // console.log({ id, id1, id2 });

    const handleOnChange = () => {
        // просто пушка, без этой обертки будет дико тормозить, а с ней все работает идеально
        startTransition(() => {
            setState(generateData());
        });
    };

    return (
        <div>
            <input type='text' onChange={handleOnChange} />
            {isPending && <>'Loading...'</>}
            <div style={{ display: 'flex', gap: 10, height: 300, overflow: 'auto' }}>
                <ul>
                    {state.map(i => (
                        <li key={i.id}>{i.title}</li>
                    ))}
                </ul>
                <ul>
                    {deferredValue.map(i => (
                        <li key={i.id}>{i.title}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default memo(React18Concurrent);

// helpers
function generateData(length = 10000) {
    return new Array(length).fill(0).map((i, idx) => ({
        id: idx,
        title: generateRandomString(),
    }));
}
