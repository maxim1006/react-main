import React, { memo, useMemo, useState } from "react";

export default memo(() => {
    const [counter, setCounter] = useState(0);

    // функция getSum вызовется только 1 раз, если не добавить во второй параметр (массив) что-то
    const sum = useMemo(() => getSum(counter), []);
    const newCounter = counter + 1;

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
