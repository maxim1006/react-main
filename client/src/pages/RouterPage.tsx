import React, { ComponentType, FC, lazy, memo, useEffect } from 'react';
import MainMenu from '@app/components/menu/MainMenu';
import { matchPath, Route, Routes, useLocation, useNavigate, useParams } from 'react-router-dom';
import RouterExactRoute from '@app/components/router/RouterExactRoute';
import RouterRoute1 from '@app/components/router/RouterRoute1';
import NotFound from '@app/components/NotFound';
import history from '@app/history';

const RouterLazyRoute = React.lazy(() => import('../components/router/RouterLazyRoute'));
const ExamplesLazyComponent = lazy(() => import('../components/examples/lazy/examples-lazy.component'));

enum RouterStepsEnum {
    Step1 = 'step1',
    Step2 = 'step2',
}

// просто убился об стол - обязательно передавать React node в component, вариант с         component: lazy(() => import('../components/examples/lazy/examples-lazy.component')), не сработает
const ROUTER_STEPS: {
    name: RouterStepsEnum;
    slug: string;
    title: RouterStepsEnum;
    component: JSX.Element | ComponentType;
}[] = [
    {
        name: RouterStepsEnum.Step1,
        slug: 'step1',
        title: RouterStepsEnum.Step1,
        component: <RouterLazyRoute />,
    },
    {
        name: RouterStepsEnum.Step2,
        slug: 'step2',
        title: RouterStepsEnum.Step2,
        component: <ExamplesLazyComponent />,
    },
];

function IndexComp() {
    return <>u'll see me on index)))</>;
}

type RouterPageProps = {};

const RouteName = '/router';

const RouterPage: FC<RouterPageProps> = () => {
    const {
        location: { search },
    } = history;

    let location = useLocation();
    let historyFromUseNavigate = useNavigate();
    let params = useParams();

    console.log({
        location,
        search,
        params,
        historyFromUseNavigate,
        match: matchPath(location.pathname, RouteName),
        matchExact: matchPath(location.pathname, RouteName)?.pathname === RouteName,
    });

    // слушатель на изменение роута надо чтобы было внутри роутера
    useEffect(() => {
        console.log('on route change');
    }, [location]);

    // если надо запушить что-то в history
    // function handleClick() {
    //     historyFromUseNavigate("/home");
    //     // go back
    //     // navigate(-1);
    // }

    return (
        <>
            <h3>Router examples</h3>

            <MainMenu
                routes={[
                    { to: 'exact', title: 'RouterExactRoute' },
                    { to: 'route1', title: 'RouterRoute1' },
                    { to: 'lazy', title: 'RouterLazyRoute' },
                    { to: 'not-found', title: 'RouterLazyNotFound' },
                ]}
            />
            {/* покажет только первый найденный роут*/}
            {/* Этот роутер закомментировал так как если раскоментить то он будет
                    покажется сразу при переходе на /router как и RouterExactRoute
                    это чисто для примера что такое exact
                    <Route path="/router" exact component={RouterExactRoute}/>
                */}
            <Routes>
                <Route path='/exact' element={<RouterExactRoute />} />
                <Route path='/route1' element={<RouterRoute1 />} />
                <Route path='/lazy' element={<RouterLazyRoute />} />
                <Route path='/*' element={<NotFound>Router not found</NotFound>} />
            </Routes>

            {/*<HistoryRouter history={history}>*/}
            {/*    <NavLink end className={({ isActive }) => ('' + isActive ? ' _active' : '')} to='/router/home'>*/}
            {/*        Home*/}
            {/*    </NavLink>*/}

            {/*    <NavLink end className={({ isActive }) => ('' + isActive ? ' _active' : '')} to='/router/lazy'>*/}
            {/*        Lazy*/}
            {/*    </NavLink>*/}

            {/*    <Routes>*/}
            {/*        <Route path='/router/home' element={<>Home</>} />*/}
            {/*        <Route path='/router/lazy' element={<ExamplesLazyComponent />} />*/}
            {/*        <Route path='*'>*/}
            {/*            <NotFound />*/}
            {/*        </Route>*/}
            {/*    </Routes>*/}
            {/*</HistoryRouter>*/}

            {/*Вот это закомментил изза ошибки You cannot render a <Router> inside another <Router>. You should never have more than one in your app. но если это верхнего уровня то норм*/}
            {/*<Router1 basename='/router'>*/}
            <NavigationBar />
            <Routes>
                <Route index element={<IndexComp />} />
                {ROUTER_STEPS.map(({ slug, component }) => (
                    // в path={`/${slug}`} неважно с / или без
                    <Route key={slug} path={`/${slug}`} element={<>{component}</>} />
                ))}

                {/*<Route path='*'>*/}
                {/*    <Redirect to={{ pathname: `/${ROUTER_STEPS[0].slug}`, search }} />*/}
                {/*</Route>*/}
            </Routes>

            <FooterBar />
            {/*</Router1>*/}
        </>
    );
};

export default memo(RouterPage);

// пример роутинга, несколько роутов при переключении линок от текущего path
// import { Redirect, BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom';

// <Router>
//     <nav className={styles.menu}>
//         {dashboardRoutes.map(({ path, name }) => (
//             <NavLink key={path} className={({ isActive }) => ('' + isActive ? ' _active' : '')} to={path}>
//                 {name}
//             </NavLink>
//         ))}
//     </nav>
//
//     <Suspense fallback="Loading...">
//         <Routes>
//             <Redirect exact from={initPageRoute} to={dashboardRoutes[0].path} />
//
//             {dashboardRoutes.map(({ path, route }) => (
//                 <Route
//                     key={path}
//                     path={path}
//                     component={lazy(() => import(`@app/components/dashboard${route}.dashboard`))}
//                 />
//             ))}
//         </Routes>
//     </Suspense>
// </Router>

// dummy components
function NavigationBar() {
    let navigate = useNavigate();

    const onClick = (slug: string) => () => navigate(slug);

    return (
        <>
            <div style={{ margin: '40px 10px 10px' }}>Nav bar</div>
            <ul>
                {ROUTER_STEPS.map(({ slug }) => {
                    return (
                        <li key={slug} onClick={onClick(slug)}>
                            Go to {slug}
                        </li>
                    );
                })}
            </ul>
        </>
    );
}

function FooterBar() {
    return <div style={{ margin: 10 }}>Footer bar</div>;
}
