import React, { ReactNode, useMemo } from 'react';
import { FullRouterRoutingModel } from '@app/components/router/full/full-router.model';

interface FullRouterContextModel {
    routes: FullRouterRoutingModel[];
}

export const FullRouterContext = React.createContext<FullRouterContextModel>({} as FullRouterContextModel);

type FullRouterProviderProps = {
    routes: FullRouterRoutingModel[];
    children: ReactNode;
};

export const FullRouterProvider = ({ children, routes }: FullRouterProviderProps) => {
    const contextValue = useMemo(
        () => ({
            routes,
        }),
        [routes]
    );

    return <FullRouterContext.Provider value={contextValue}>{children}</FullRouterContext.Provider>;
};
