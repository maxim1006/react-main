import React, { FC, memo } from 'react';
import { selectTestsCounter, testsDecrementAction, testsIncrementAction } from '@app/tests/store/reducers/counter';
import { useDispatch, useSelector } from 'react-redux';

type TestsReduxCounterProps = {};

const TestsReduxCounter: FC<TestsReduxCounterProps> = () => {
    const dispatch = useDispatch();
    const counter = useSelector(selectTestsCounter);

    return (
        <div>
            <p data-testid='value title'>{counter}</p>
            <button data-testid='increment-btn' onClick={() => dispatch(testsIncrementAction())}>
                Increment
            </button>
            <button data-testid='decrement-btn' onClick={() => dispatch(testsDecrementAction())}>
                Decrement
            </button>
        </div>
    );
};

export default memo(TestsReduxCounter);
