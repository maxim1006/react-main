import { memo, FC } from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import TestRouterAboutPage from './pages/tests-router-about-page.component';
import TestsRouterMainPage from './pages/tests-router-main-page.component';
import TestsRouterErrorPage from './pages/tests-router-error-page.component';

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
                    <TestRouterAboutPage />
                </Route>
                <Route path='/'>
                    <TestsRouterMainPage />
                </Route>
                <Route path='/*'>
                    <TestsRouterErrorPage />
                </Route>
            </Switch>
        </BrowserRouter>
    );
};

export default memo(RouterTestContainer);
