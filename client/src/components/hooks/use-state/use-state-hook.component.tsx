import { memo, useEffect, useState } from 'react';

type UseStateProps = {};

const UseState = memo<UseStateProps>(() => {
    let [counter, setCounter] = useState<number>(0);
    const [obj] = useState<{ a: number }>({ a: 1 });
    // example of useState init as function
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [fState] = useState(() => {
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
    }, [counter]);

    const onClick = () => {
        // setCounter(value => ++value);
        //
        // setObj(oldValue => {
        //     oldValue.a += 1;
        //
        //     return { ...oldValue };
        // });
    };

    const onBatchClick = () => {
        // в коллбеках батчинг вызовется только 1 раз
        setCounter(10);
        setCounter(100);
        setCounter(1000);
        setCounter(v => v + 1);
        console.log(counter);
    };

    const onNotBatchClick = () => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => {
                // тут не батчинга и ререндеринг произойдет много раз
                console.log(data);
                setCounter(10);
                setCounter(100);
                setCounter(1000);
                setCounter(v => v + 1);
                console.log(counter);
            });
    };

    return (
        <>
            <button onClick={onBatchClick}>batch</button>
            <button onClick={onNotBatchClick}>not batch</button>
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
