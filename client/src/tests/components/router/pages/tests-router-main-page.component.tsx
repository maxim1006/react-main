import React, { memo, FC } from 'react';

type TestsRouterMainPageProps = {};

const TestsRouterMainPage: FC<TestsRouterMainPageProps> = () => {
    return <div data-testid='main-page'>TestsRouterMainPage</div>;
};

export default memo(TestsRouterMainPage);
