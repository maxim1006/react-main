import React, { memo, useEffect, useLayoutEffect, useReducer, useRef, useState } from 'react';

type UseRefHookProps = {};

const UseRefHook = memo<UseRefHookProps>(() => {
    const [renderState, setRenderState] = useState<{ a: number }>({ a: 1 });
    // const [, forceUpdate] = useReducer(x => x + 1, 0);

    // Usage 1
    // @ViewChild
    const divRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        console.log(divRef.current);
    }, []);

    useLayoutEffect(() => {
        console.log(divRef.current);
    }, []);

    // Usage2
    const noRerenderState = useRef({ a: 1 });

    setTimeout(() => {
        noRerenderState.current = { a: 2 };
    }, 3000);

    console.log(renderState);
    console.log(noRerenderState);

    return (
        <>
            {renderState.a}
            <div onClick={() => setRenderState(i => ({ ...i, a: ++i.a }))}>click</div>
            <div ref={divRef}>UseRefHook</div>
        </>
    );
});

export default UseRefHook;
