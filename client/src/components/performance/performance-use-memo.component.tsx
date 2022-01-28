/* eslint-disable */
import React, { memo, useMemo, useState } from 'react';

// useMemo - кеширую сложные вычисления, функция expensiveFunc вызовется только 1 раз при инициализации. Дальше при
// изменении стейта будет вызываться функция без useMemo, а мемоизировванная не будет
// https://reactjs.org/docs/hooks-reference.html#usememo

const PerformanceUseMemo: React.FC = () => {
    let [count, setCount] = useState(0);
    const resCount1 = expensiveFunc(false);

    const resCount = useMemo(() => {
        return expensiveFunc(true);
    }, []);

    return (
        <>
            count: {count}
            <button type='button' onClick={() => setCount(++count)}>
                Plus one
            </button>
        </>
    );
};

export default memo(PerformanceUseMemo);

// helpers
function expensiveFunc(useMemo: boolean): number {
    console.log('expensiveFunction triggered!!! useMemo: ', useMemo);
    // const startPerformanceLog = performance.now();
    // console.log("startPerformanceLog ", startPerformanceLog);
    let sum = 0;
    for (let i = 0; i < 10000000; i++) {
        sum += i;
    }
    // console.log("function time ", performance.now() - startPerformanceLog, " milliseconds");

    return sum;
}
