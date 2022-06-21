import { lazy, memo } from 'react';
import {
    BrowserRouter as Router1,
    NavLink,
    Navigate,
    Route,
    unstable_HistoryRouter as HistoryRouter,
    Routes,
} from 'react-router-dom';
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
            <HistoryRouter history={history}>
                <NavLink end className={({ isActive }) => ('' + isActive ? ' _active' : '')} to='/'>
                    Home
                </NavLink>

                <NavLink end className={({ isActive }) => ('' + isActive ? ' _active' : '')} to='/lazy'>
                    Lazy
                </NavLink>

                <Routes>
                    <Route path='/' element={<>Home</>} />
                    <Route path='/lazy' element={<ExamplesLazyComponent />} />
                    <Route path='*'>
                        <NotFound />
                    </Route>
                </Routes>
            </HistoryRouter>

            <Router1>
                <NavigationBar />
                <Routes>
                    {ROUTER_STEPS.map(({ slug, component }) => (
                        <Route key={slug} path={`/${slug}`} element={<>{component}</>} />
                    ))}

                    <Route path='*'>
                        <Navigate to={{ pathname: `/${ROUTER_STEPS[0].slug}`, search }} />
                    </Route>
                </Routes>

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
