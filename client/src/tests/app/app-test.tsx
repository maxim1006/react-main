import React, { memo, FC, useState, useEffect } from 'react';

type AppTestProps = {};

const AppTest: FC<AppTestProps> = () => {
    const [data, setData] = useState(null);
    const [toggle, setToggle] = useState(false);

    const onToggle = () => {
        setToggle(i => !i);
    };

    useEffect(() => {
        setTimeout(() => {
            setData({});
        }, 100);
    }, []);

    return (
        <div>
            <div>Hello mom!</div>
            {toggle && <div data-testid='toggle-elem'>toggle</div>}
            <button data-testid='toggle-button' onClick={onToggle} type='button'>
                toggle
            </button>
            {data && <div style={{ color: 'red' }}>data</div>}
        </div>
    );
};

export default memo(AppTest);
