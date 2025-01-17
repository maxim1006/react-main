import React, { FC, useEffect } from 'react';
import mobxCounter from '../store/mobx-counter';
import { observer } from 'mobx-react-lite';
import { autorun, reaction } from 'mobx';

type MobxCounterContainerProps = {};

const MobxCounterContainer: FC<MobxCounterContainerProps> = () => {
    useEffect(() => {
        // сработает на изменение любого из свойств которое внутри него, если внутри не будет свойств закоторыми autorun не следит то он не будет вызываться
        autorun(() => {
            console.log('autorun triggered');
            if (mobxCounter.random > 0.5) {
                console.log('Its > 0.5');
            } else {
                console.log('Its <= 0.5');
            }

            // если разкомментировать то autorun будет вызываться на increment/decrement, а так нет
            // console.log(mobxCounter.count);
        });

        // то что прокинул в первую функцию, на то и реагирует reaction
        reaction(
            // отреагирует на count и random
            // () => ({ count: mobxCounter.count, random: mobxCounter.random }),
            // отреагирует только на count
            () => ({ count: mobxCounter.count }),
            ({ count }) => {
                console.log('reaction triggered');
                if (mobxCounter.random > 0.5) {
                    console.log('Its > 0.5');
                } else {
                    console.log('Its <= 0.5');
                }

                console.log(count);
            },
        );
    }, []);

    return (
        <div className='taMobxCounterContainer'>
            <p>Count: {mobxCounter.count}</p>
            <p>Вычисляемое свойство: {mobxCounter.total}</p>
            <div>
                <button
                    type='button'
                    onClick={() => {
                        mobxCounter.randomize();
                    }}
                >
                    Randomize
                </button>
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
