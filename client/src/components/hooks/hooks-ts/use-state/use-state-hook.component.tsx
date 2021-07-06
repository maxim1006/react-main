import React, { memo, useEffect, useState } from 'react';

type UseStateProps = {};

const UseState = memo<UseStateProps>(() => {
    let [counter, setCounter] = useState<number>(0);
    const [obj, setObj] = useState<{ a: number }>({ a: 1 });
    const [fState, setFState] = useState(() => {
        console.log('init state function is triggered');
        return 1;
    });

    console.log(counter);

    useEffect(() => {
        setCounter(10);
        console.log(counter);
        setCounter(100);
        console.log(counter);
        setCounter(1000);
        console.log(counter);
        setCounter(v => v + 1);
        console.log(counter);
    }, []);

    const onClick = () => {
        setCounter(value => ++value);

        setObj(oldValue => {
            oldValue.a += 1;

            return { ...oldValue };
        });
    };

    return (
        <>
            {fState}
            <button onClick={onClick}>increase</button>
            {/*/ / TODO implement on friday*/}
            <button>decrease</button>
            <p>Counter: {counter}</p>
            <p>Object example: {obj.a}</p>
        </>
    );
});

export default UseState;
