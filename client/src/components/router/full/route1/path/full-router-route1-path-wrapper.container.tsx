import React, { FC, memo } from 'react';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import FullRouterProxy from '@app/components/router/full/full-router-proxy.component';
import FullRouterGeneralContainer from '@app/components/router/full/general/full-router-general.container';
import { FullRouterRoute1PathEnum } from '@app/components/router/full/full-router.model';

type FullRouterRoute1PathWrapperProps = {};

const FullRouterRoute1PathWrapper: FC<FullRouterRoute1PathWrapperProps> = () => {
    const navigate = useNavigate();
    const location = useLocation();

    console.log('FullRouterRoute1PathWrapper ', { navigate, location });

    return (
        // вот этот прокси нужен для того чтобы отрисовать все paths
        <FullRouterProxy>
            <div>
                <Routes>
                    {/* тут могу использовать место для верхнего меню например или для любыйх компонент по конкретному роуту*/}
                    <Route path={FullRouterRoute1PathEnum.Path} element={<FullRouterGeneralContainer />} />
                </Routes>
            </div>
        </FullRouterProxy>
    );
};

export default memo(FullRouterRoute1PathWrapper);
