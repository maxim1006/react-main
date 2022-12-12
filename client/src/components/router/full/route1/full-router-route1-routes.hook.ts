import { FullRouterRoutingModel } from '@app/components/router/full/full-router.model';
import { useMemo } from 'react';
import {
    FULL_ROUTER_ROUTE1_PATH1_ROUTING,
    FULL_ROUTER_ROUTE1_PATH2_ROUTING,
    FULL_ROUTER_ROUTE1_PATH_ROUTING,
} from '@app/components/router/full/full-router.constants';

export function useFullRouterRoute1Routes(): FullRouterRoutingModel[] {
    return useMemo(() => {
        return [FULL_ROUTER_ROUTE1_PATH_ROUTING, FULL_ROUTER_ROUTE1_PATH1_ROUTING, FULL_ROUTER_ROUTE1_PATH2_ROUTING];
    }, []);
}
