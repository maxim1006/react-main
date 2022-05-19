import React, { memo, FC } from 'react';

type TestRouterMainPageProps = {};

const TestRouterMainPage: FC<TestRouterMainPageProps> = () => {
    return <div data-testid='main-page'>TestRouterMainPage</div>;
};

export default memo(TestRouterMainPage);
