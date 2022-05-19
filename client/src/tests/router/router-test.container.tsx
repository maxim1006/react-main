import { memo, FC } from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import TestsRouterAboutPageComponent from '@app/tests/router/pages/tests-router-about-page.component';
import TestsRouterMainPageComponent from '@app/tests/router/pages/tests-router-main-page.component';

type RouterTestContainerProps = {};

const RouterTestContainer: FC<RouterTestContainerProps> = () => {
    return (
        <BrowserRouter>
            <Link data-testid='main-link' to='/'>
                Main
            </Link>
            <Link data-testid='about-link' to='/about'>
                About
            </Link>
            <Switch>
                <Route path='/about'>
                    <TestsRouterAboutPageComponent />
                </Route>
                <Route path='/'>
                    <TestsRouterMainPageComponent />
                </Route>
            </Switch>
        </BrowserRouter>
    );
};

export default memo(RouterTestContainer);
