import React, { memo, useMemo, useReducer } from 'react';

type UseMemoProps = {};

const UseMemo = memo<UseMemoProps>(() => {
    const [state, rerender] = useReducer(i => ++i, 0);

    const memoizedObject = useMemo(() => {
        let count = 0;

        for (let i = 0; i < 2000000000; i++) {
            ++count;
        }

        console.log('end');

        return {
            count,
        };
    }, []);
    // example with memo recalculations
    // }, [state]);

    return (
        <>
            State: {state} <br />
            <button onClick={rerender}>Rerender</button>
            {memoizedObject.count}
        </>
    );
});

export default UseMemo;
