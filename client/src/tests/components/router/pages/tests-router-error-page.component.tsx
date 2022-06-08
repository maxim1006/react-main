import React, { memo, FC } from 'react';

type TestsRouterErrorPageProps = {};

const TestsRouterErrorPage: FC<TestsRouterErrorPageProps> = () => {
    return <div data-testid='error-page'>TestRouterErrorPage</div>;
};

export default memo(TestsRouterErrorPage);
