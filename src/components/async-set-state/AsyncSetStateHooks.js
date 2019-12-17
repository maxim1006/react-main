import React, {useState} from "react";

export default ({increaseNumber}) => {
    const [counter, setCounter] = useState(0);
    const onClick = () => {
        setCounter(counter + increaseNumber);
    };

    return (
        <div className="async-set-state">
            <p>
                {counter}
            </p>
            <p>
                <button
                    type="button"
                    onClick={onClick}
                >
                    Increase
                </button>
            </p>
        </div>
    )
}
