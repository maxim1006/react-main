import React, { FC, memo } from 'react';
import { Provider } from 'react-redux';
import { createReduxStore } from '@app/tests/store/store';
import TestsReduxCounter from '@app/tests/components/redux/counter/tests-redux-counter.component';

type TestsReduxMainContainerProps = {};

const TestsReduxContainer: FC<TestsReduxMainContainerProps> = () => {
    let a = 1;
    let b = 2;

    a || b ? true : false;

    return (
        <Provider store={createReduxStore()}>
            <TestsReduxCounter />
        </Provider>
    );
};

export default memo(TestsReduxContainer);
