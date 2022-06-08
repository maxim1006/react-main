import React, { memo, FC } from 'react';

type TestsRouterAboutPageProps = {};

const TestsRouterAboutPage: FC<TestsRouterAboutPageProps> = () => {
    return <div data-testid='about-page'>TestsRouterAboutPage</div>;
};

export default memo(TestsRouterAboutPage);
