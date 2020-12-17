import React, { memo, useEffect, useLayoutEffect, useState } from 'react';

type UseEffectProps = {};

function UseEffectChild({ prop }: { prop?: number }) {
    // ngOnChanges
    useEffect(() => {
        console.log(`I'm ngOnUpdate by prop ${prop}`);

        return () => {
            console.log('UseEffectChild triggered when component rerendered');
        };
    }, [prop]);

    return <>{prop}</>;
}

function UseEffectDestroy() {
    console.log('UseEffectDestroy initialized');

    useEffect(() => {
        const cb = (e: MouseEvent) => console.log(e.clientX);
        document.documentElement.addEventListener('mousemove', cb);

        // ngOnDestroy
        return () => {
            console.log('UseEffectDestroy destroyed');
            document.documentElement.removeEventListener('mousemove', cb);
        };
    }, []);

    return <>UseEffectDestroy</>;
}

const UseEffect = memo<UseEffectProps>(() => {
    const [useEffectDestroyVisible, setUseEffectDestroyVisible] = useState<boolean>(true);
    const [state, setState] = useState<number>(0);

    // optional
    useLayoutEffect(() => {
        console.log('I can get dom elements but triggered before useEffect');
    }, []);

    // ngAfterViewInit, constructor, ngOnInit
    useEffect(() => {
        const intervalId = setInterval(() => setState(i => ++i), 5000);
        console.log("I'm ngAfterViewInit");

        return () => clearInterval(intervalId);
    }, []);

    // ngDoCheck
    useEffect(() => {
        console.log("I'm ngDoCheck");
    });

    return (
        <>
            <UseEffectChild prop={state} />

            <p></p>

            <button onClick={() => setUseEffectDestroyVisible(i => !i)}>toggle UseEffectDestroy</button>
            {useEffectDestroyVisible && <UseEffectDestroy />}
        </>
    );
});

export default UseEffect;
