import { memo, FC, useState, useEffect } from 'react';

type AppTestProps = {};

const AppTest: FC<AppTestProps> = () => {
    const [data, setData] = useState(null);
    const [toggle, setToggle] = useState(false);
    const [inputVal, setInputVal] = useState('');

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
            <div data-testid='input-val'>{inputVal}</div>
            <input onChange={e => setInputVal(e.target.value)} type='text' placeholder='input value' />
            {data && <div style={{ color: 'red' }}>data</div>}
        </div>
    );
};

export default memo(AppTest);
