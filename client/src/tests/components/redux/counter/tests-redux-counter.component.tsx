import React, { memo, FC } from 'react';
import { testsDecrementAction, testsIncrementAction } from '@app/tests/store/reducers/counter';
import { useDispatch, useSelector } from 'react-redux';
import { TestsRootState } from '@app/tests/store/store';

type TestsReduxCounterProps = {};

const TestsReduxCounter: FC<TestsReduxCounterProps> = () => {
    const dispatch = useDispatch();
    const counter = useSelector<TestsRootState>(state => {
        return state.counter;
    });

    console.log(counter);

    return (
        <div>
            <p>{counter}</p>
            <button onClick={() => dispatch(testsIncrementAction())}>Increment</button>
            <button onClick={() => dispatch(testsDecrementAction())}>Decrement</button>
        </div>
    );
};

export default memo(TestsReduxCounter);
