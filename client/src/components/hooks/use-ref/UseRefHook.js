import React, { memo, useEffect, useRef } from 'react';

export default memo(() => {
    const ref = useRef();
    const ref1 = React.createRef();

    console.log(1); // 1,3,2

    // должен обернуть в useEffect, чтобы ref.current имела значение,
    // так как useEffect вызвовется после 1го рендеринга
    useEffect(() => {
        console.log(2); // 1,3,2
        console.log(ref);
        console.log(ref1);
    }, [ref1]);

    console.log(3); // 1,3,2

    // Usage2
    const noRerenderState = useRef({ a: 1 });

    setTimeout(() => {
        noRerenderState.current = { a: 2 };
    }, 3000);

    console.log(noRerenderState);

    return (
        <>
            <div ref={ref}>Div hook ref</div>
            <div ref={ref1}>Div creatRef ref</div>
        </>
    );
});
