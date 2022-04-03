import React, { FC, memo, useState } from 'react';
import { flushSync } from 'react-dom';

type React18BatchingProps = {};

const React18Batching: FC<React18BatchingProps> = () => {
    const [state, setState] = useState(0);
    const [state1, setState1] = useState(0);

    const update = () => {
        setState(i => ++i);
        setState1(i => ++i);
    };

    const updateAsync = () => {
        // теперь и в setTimeout rerender вызовется 1 раз
        setTimeout(() => {
            setState(i => ++i);
            setState1(i => ++i);
        }, 1000);
    };

    const flushSyncCb = () => {
        // если по каким-то причинам хочу синхронную перерисовку (отменить батчинг) то оборачиваю апдейт стейта в flushSync
        setTimeout(() => {
            flushSync(() => {
                setState(i => ++i);
            });
            flushSync(() => {
                setState1(i => ++i);
            });
        }, 1000);
    };

    console.log('render');

    return (
        <div>
            <p>{state}</p>
            <p>{state1}</p>
            <button type='button' onClick={update}>
                updateSync
            </button>
            <br />
            <button type='button' onClick={updateAsync}>
                updateAsync
            </button>
            <br />
            <button type='button' onClick={flushSyncCb}>
                updateFlushSync
            </button>
        </div>
    );
};

export default memo(React18Batching);
