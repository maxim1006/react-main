import React, { memo, FC, FunctionComponent, lazy } from 'react';
import cn from 'classnames';
import { BrowserRouter as Router } from 'react-router-dom';

type FullRouterContainerProps = {};

export enum FullRouterTypeEnum {
    Route1 = 'Route1',
    Default = 'default',
}

// тут верхнеуровневые компоненты
export const FULL_ROUTER_DESCRIPTORS: Record<FullRouterTypeEnum, { component: FunctionComponent | null }> = {
    [FullRouterTypeEnum.Route1]: {
        component: lazy(() => import('@app/components/router/full/route1/full-router-route1.container')),
    },
    [FullRouterTypeEnum.Default]: {
        component: () => null,
    },
};

// возможно тут доп роутинг с самого начала
const ROUTE_FULL = '/full-router';

const FullRouterContainer: FC<FullRouterContainerProps> = () => {
    const type = 'Route1';

    const FullRouterRouteContainer = FULL_ROUTER_DESCRIPTORS[type]?.component;

    return (
        <div className={cn('taFullRouterContainer')}>
            <Router basename={ROUTE_FULL}>
                <FullRouterRouteContainer />
            </Router>
        </div>
    );
};

export default memo(FullRouterContainer);
