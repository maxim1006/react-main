import React, { memo, FC } from 'react';
import cn from 'classnames';

type FullRouterRoute1Path2ContainerProps = {
    routePath?: string;
};

const FullRouterRoute1Path2Container: FC<FullRouterRoute1Path2ContainerProps> = ({ routePath }) => {
    console.log('FullRouterRoute1Path2Container, ' + routePath);
    return <div className={cn('taFullRouterRoute1Path2Container')}>FullRouterRoute1Path2Container</div>;
};

export default memo(FullRouterRoute1Path2Container);
