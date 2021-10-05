import React, { memo, useCallback, useState } from 'react';

const Child = memo(({ prop, onClick }) => {
    console.log('Child rerender');
    return (
        <div onClick={onClick}>
            Child counter:
            {prop}
        </div>
    );
});

const Child1 = memo(({ prop, onClick }) => {
    console.log('Child 1 rerender');
    return (
        <div onClick={onClick}>
            Child counter:
            {prop}
        </div>
    );
});

export default memo(() => {
    let [clickCounter, setClickCounter] = useState(0);
    let [clickCounter1, setClickCounter1] = useState(0);

    // Если оставлю такие коллбеки то при клике на 1 чайлд будут перерендериваться оба
    // const onChildClick = () => setClickCounter(++clickCounter);
    // const onChildClick1 = () => setClickCounter1(++clickCounter1);

    // а если так, то useCallback вернет мемоизированную функцию и перерендериваться будет только тот
    // чайлд на который кликнул
    const onChildClick = useCallback(() => setClickCounter(i => ++i), [setClickCounter]);
    const onChildClick1 = useCallback(() => setClickCounter1(i => ++i), [setClickCounter1]);

    return (
        <>
            <Child prop={clickCounter} onClick={onChildClick} />
            <Child1 prop={clickCounter1} onClick={onChildClick1} />
        </>
    );
});
