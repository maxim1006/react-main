import React, { memo, FC } from 'react';
import TestsReduxContainer from '@app/tests/components/redux/tests-redux.container';

type TestsPageProps = {};

const TestsPage: FC<TestsPageProps> = () => {
    return <TestsReduxContainer />;
};

export default memo(TestsPage);
