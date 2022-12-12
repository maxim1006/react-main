import { FullRouterRoute1PathEnum, FullRouterRoutingModel } from '@app/components/router/full/full-router.model';
import { lazy } from 'react';

export const FULL_ROUTER_ROUTE1_PATH_ROUTING: FullRouterRoutingModel = {
    path: FullRouterRoute1PathEnum.Path,
    title: <>Path</>,
    component: lazy(() => import('@app/components/router/full/route1/path/full-router-route1-path.container')),
};

export const FULL_ROUTER_ROUTE1_PATH1_ROUTING: FullRouterRoutingModel = {
    path: FullRouterRoute1PathEnum.Path1,
    title: <>Path1</>,
    component: lazy(() => import('@app/components/router/full/route1/path/full-router-route1-path1.container')),
};

export const FULL_ROUTER_ROUTE1_PATH2_ROUTING: FullRouterRoutingModel = {
    path: FullRouterRoute1PathEnum.Path2,
    title: <>Path2</>,
    component: lazy(() => import('@app/components/router/full/route1/path/full-router-route1-path2.container')),
};
