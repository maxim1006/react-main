import React from 'react';
import { Route, Switch } from 'react-router-dom';
import NotFound from '../components/NotFound';
import MainMenu from '../components/menu/MainMenu';
import RouterExactRoute from '../components/router/RouterExactRoute';
import RouterRoute1 from '../components/router/RouterRoute1';

const RouterLazyRoute = React.lazy(() => import('../components/router/RouterLazyRoute'));

export default () => {
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
                <Route path="/router/exact" exact component={RouterExactRoute} />
                <Route path="/router/route1" component={RouterRoute1} />
                <Route path="/router/lazy" component={RouterLazyRoute} />
                <Route path="/router/*">
                    <NotFound>Router not found</NotFound>
                </Route>
            </Switch>
        </>
    );
};

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
