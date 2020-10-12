import React, { memo, useEffect, useMemo, useState } from 'react';

export default memo(() => {
    const obj = {};
    const memoizedObj = useMemo(() => {}, []);
    const [counter, setCounter] = useState(0);

    // функция getSum вызовется только 1 раз, если не добавить во второй параметр (массив) что-то
    const sum = useMemo(() => getSum(counter), [counter]);
    const newCounter = counter + 1;

    // второе использование для кеширования объекта
    useEffect(() => {
        console.log('useEffect without useMemo');
    }, [obj]);

    useEffect(() => {
        console.log('useEffect with useMemo');
    }, [memoizedObj]);

    return (
        <>
            <button onClick={_ => setCounter(sum)}>Add counter useMemo</button>
            <button onClick={_ => setCounter(newCounter)}>Add counter</button>
            {counter}
        </>
    );
});

// helper
// вызовется только 1 раз при инициализации
function getSum(num) {
    return (num += num);
}
