import React, { FC, memo } from 'react';
import { Provider } from 'react-redux';
import { createReduxTestsStore } from '@app/tests/store/store';
import TestsReduxCounter from '@app/tests/components/redux/counter/tests-redux-counter.component';

type TestsReduxMainContainerProps = {};

const TestsReduxContainer: FC<TestsReduxMainContainerProps> = () => {
    return (
        <Provider store={createReduxTestsStore()}>
            <TestsReduxCounter />
        </Provider>
    );
};

export default memo(TestsReduxContainer);
