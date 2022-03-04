import React, { FC, lazy, memo, useEffect } from 'react';
import MainMenu from '@app/components/menu/MainMenu';
import {
    BrowserRouter as Router1,
    NavLink,
    Route,
    Router,
    Switch,
    useHistory,
    useLocation,
    useParams,
} from 'react-router-dom';
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

const ROUTER_STEPS = [
    {
        name: RouterStepsEnum.Step1,
        slug: 'step1',
        title: RouterStepsEnum.Step1,
        component: lazy(() => import('../components/router/RouterLazyRoute')),
    },
    {
        name: RouterStepsEnum.Step2,
        slug: 'step2',
        title: RouterStepsEnum.Step2,
        component: lazy(() => import('../components/examples/lazy/examples-lazy.component')),
    },
];

type RouterPageProps = {};

const RouterPage: FC<RouterPageProps> = () => {
    const {
        location: { search },
    } = history;

    let location = useLocation();
    let historyFromUseHistory = useHistory();
    let params = useParams();

    console.log({
        location,
        search,
        params,
        historyFromUseHistory,
    });

    // надо чтобы было внутри роутера
    useEffect(() => {
        const unsubscribe = historyFromUseHistory.listen((location, action) => {
            console.log('on route change');
        });

        return () => unsubscribe();
    }, [historyFromUseHistory]);

    return (
        <>
            <h3>Router examples</h3>

            <MainMenu
                routes={[
                    { to: '/router/exact', title: 'RouterExactRoute' },
                    { to: '/router/route1', title: 'RouterRoute1' },
                    { to: '/router/lazy', title: 'RouterLazyRoute' },
                    { to: '/router/*', title: 'RouterLazyNotFound' },
                ]}
            />
            {/* покажет только первый найденный роут*/}
            <Switch>
                {/* Этот роутер закомментировал так как если раскоментить то он будет
                    покажется сразу при переходе на /router как и RouterExactRoute
                    это чисто для примера что такое exact
                    <Route path="/router" exact component={RouterExactRoute}/>
                */}
                <Route path='/router/exact' exact component={RouterExactRoute} />
                <Route path='/router/route1' component={RouterRoute1} />
                <Route path='/router/lazy' component={RouterLazyRoute} />
                <Route path='/router/*'>
                    <NotFound>Router not found</NotFound>
                </Route>
            </Switch>

            <Router history={history}>
                <NavLink exact activeClassName='_active' to='/router/home'>
                    Home
                </NavLink>

                <NavLink exact activeClassName='_active' to='/router/lazy'>
                    Lazy
                </NavLink>

                <Switch>
                    <Route exact path='/router/home' component={() => <>Home</>} />
                    <Route exact path='/router/lazy' component={ExamplesLazyComponent} />
                    <Route path='*'>
                        <NotFound />
                    </Route>
                </Switch>
            </Router>

            <Router1 basename='/router'>
                <NavigationBar />
                <Switch>
                    {ROUTER_STEPS.map(({ slug, component }) => (
                        <Route key={slug} path={`/${slug}`} component={component} />
                    ))}

                    {/*<Route path='*'>*/}
                    {/*    <Redirect to={{ pathname: `/${ROUTER_STEPS[0].slug}`, search }} />*/}
                    {/*</Route>*/}
                </Switch>

                <FooterBar />
            </Router1>
        </>
    );
};

export default memo(RouterPage);

// пример роутинга, несколько роутов при переключении линок от текущего path
// import { Redirect, BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom';

// <Router>
//     <nav className={styles.menu}>
//         {dashboardRoutes.map(({ path, name }) => (
//             <NavLink key={path} activeClassName="_active" className={styles.menuLink} to={path}>
//                 {name}
//             </NavLink>
//         ))}
//     </nav>
//
//     <Suspense fallback="Loading...">
//         <Switch>
//             <Redirect exact from={initPageRoute} to={dashboardRoutes[0].path} />
//
//             {dashboardRoutes.map(({ path, route }) => (
//                 <Route
//                     key={path}
//                     path={path}
//                     component={lazy(() => import(`@app/components/dashboard${route}.dashboard`))}
//                 />
//             ))}
//         </Switch>
//     </Suspense>
// </Router>

// dummy components
function NavigationBar() {
    let history = useHistory();

    const onClick = (slug: string) => () => {
        history.push(slug);
    };

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
