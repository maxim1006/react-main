import { lazy, memo } from 'react';
import { BrowserRouter as Router1, Redirect, NavLink, Route, Router, Switch } from 'react-router-dom';
import history from '../../../history';

const ExamplesLazyComponent = lazy(() => import('../lazy/examples-lazy.component'));

const NotFound = () => <>Not found</>;

enum RouterStepsEnum {
    Step1 = 'step1',
    Step2 = 'step2',
}

const ROUTER_STEPS = [
    {
        name: RouterStepsEnum.Step1,
        slug: 'step1',
        title: RouterStepsEnum.Step1,
        component: lazy(() => import('../lazy/examples-lazy.component')),
    },
    {
        name: RouterStepsEnum.Step2,
        slug: 'step2',
        title: RouterStepsEnum.Step2,
        component: lazy(() => import('../lazy/examples-lazy.component')),
    },
];

const ExamplesRouterComponent = () => {
    const {
        location: { search },
    } = history;

    return (
        <>
            <Router history={history}>
                <NavLink exact={true} activeClassName='_active' to='/'>
                    Home
                </NavLink>

                <NavLink exact={true} activeClassName='_active' to='/lazy'>
                    Lazy
                </NavLink>

                <Switch>
                    <Route exact path='/' component={() => <>Home</>} />
                    <Route exact path='/lazy' component={ExamplesLazyComponent} />
                    <Route path='*'>
                        <NotFound />
                    </Route>
                </Switch>
            </Router>

            <Router1>
                <NavigationBar />
                <Switch>
                    {ROUTER_STEPS.map(({ slug, component }) => (
                        <Route key={slug} path={`/${slug}`} component={component} />
                    ))}

                    <Route path='*'>
                        <Redirect to={{ pathname: `/${ROUTER_STEPS[0].slug}`, search }} />
                    </Route>
                </Switch>

                <FooterBar />
            </Router1>
        </>
    );
};

export default memo(ExamplesRouterComponent);

// dummy components
function NavigationBar() {
    return <>Nav bar</>;
}

function FooterBar() {
    return <>Footer bar</>;
}
