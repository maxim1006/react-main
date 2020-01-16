import React, {memo, useState} from "react";

export default memo(() => {

    let [counter, setCounter] = useState(0);

    const decrease = () => setCounter(--counter);
    const increase = () => setCounter(++counter);

    return (
        <div className="hooks-counter">
            <button type="button" onClick={decrease}>decrease</button>
            <span className="hooks-counter__value">{counter}</span>
            <button type="button" onClick={increase}>increase</button>
        </div>
    );

});
