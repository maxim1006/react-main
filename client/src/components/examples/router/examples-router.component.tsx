import React, { memo } from 'react';
import { NavLink, Route, Router, Switch } from 'react-router-dom';
import history from '../../../history';

const ExamplesLazyComponent = React.lazy(() => import('../lazy/examples-lazy.component'));

const NotFound = () => <>Not found</>;

const ExamplesRouterComponent = () => {
    return (
        <Router history={history}>
            <NavLink exact={true} activeClassName='_active' to={'/'}>
                Home
            </NavLink>

            <NavLink exact={true} activeClassName='_active' to={'/lazy'}>
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
    );
};

export default memo(ExamplesRouterComponent);
