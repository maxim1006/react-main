import React, { FC, memo } from 'react';
import { FullRouterProvider } from '@app/components/router/full/full-router.provider';
import { useFullRouterRoute1Routes } from '@app/components/router/full/route1/full-router-route1-routes.hook';
import FullRouterRoute1PathWrapper from '@app/components/router/full/route1/path/full-router-route1-path-wrapper.container';

type FullRouterRoute1ContainerProps = {};

const FullRouterRoute1Container: FC<FullRouterRoute1ContainerProps> = () => {
    const routes = useFullRouterRoute1Routes();

    return (
        // провайдер нужен чтобы сложить туда главные path роуты и дальше прокинуть их в FullRouterProxy внутри FullRouterRoute1PathWrapper
        <FullRouterProvider routes={routes}>
            Это верхнеуровневый route1 http://localhost:3000/full-router
            <FullRouterRoute1PathWrapper />
        </FullRouterProvider>
    );
};

export default memo(FullRouterRoute1Container);
