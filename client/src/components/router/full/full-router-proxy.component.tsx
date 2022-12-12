import React, { FC, memo, PropsWithChildren, useContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import { FullRouterContext } from '@app/components/router/full/full-router.provider';

const FullRouterProxy: FC<PropsWithChildren> = ({ children }) => {
    const { routes } = useContext(FullRouterContext);

    console.log({ routes });

    return (
        <>
            {children}
            <Routes>
                {routes.map(route => (
                    <Route key={route.path} path={route.path} element={React.createElement(route.component)} />
                ))}
            </Routes>
        </>
    );
};

export default memo(FullRouterProxy);
