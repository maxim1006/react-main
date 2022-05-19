import React, { memo, FC } from 'react';

type TestRouterAboutPageProps = {};

const TestRouterAboutPage: FC<TestRouterAboutPageProps> = () => {
    return <div data-testid='about-page'>TestRouterAboutPage</div>;
};

export default memo(TestRouterAboutPage);
