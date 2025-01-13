import React, { FC } from 'react';
import mobxCounter from '../store/mobx-counter';
import { observer } from 'mobx-react-lite';

type MobxCounterContainerProps = {};

const MobxCounterContainer: FC<MobxCounterContainerProps> = () => {
    return (
        <div className='taMobxCounterContainer'>
            <p>Count: {mobxCounter.count}</p>
            <p>Вычисляемое свойство: {mobxCounter.total}</p>
            <div>
                <button
                    type='button'
                    onClick={() => {
                        mobxCounter.increment();
                    }}
                >
                    Increment
                </button>
                <button
                    type='button'
                    onClick={() => {
                        mobxCounter.decrement();
                    }}
                >
                    Decrement
                </button>
            </div>
        </div>
    );
};

export default observer(MobxCounterContainer);
