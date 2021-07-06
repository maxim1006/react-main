import React, { memo } from 'react';
import { Route } from 'react-router-dom';
import MainMenu from '../../menu/MainMenu';
import ProReactRouterAuthComponent from './components/auth/pro-react-router-auth.component';
import ProReactRouterAdminComponent from './components/admin/pro-react-router-admin.component';

const ProReactRouterComponent = () => {
    return (
        <div>
            <MainMenu
                routes={[
                    { to: '/pro-react/auth', title: 'Auth' },
                    { to: '/pro-react/admin', title: 'Admin' },
                ]}
            />

            <Route path="/pro-react/auth" component={ProReactRouterAuthComponent} />
            <Route path="/pro-react/admin" component={ProReactRouterAdminComponent} />
        </div>
    );
};

export default memo(ProReactRouterComponent);
