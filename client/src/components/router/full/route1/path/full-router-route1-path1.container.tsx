import React, { memo, FC } from 'react';
import cn from 'classnames';

type FullRouterRoute1Path1ContainerProps = {
    routePath?: string;
};

const FullRouterRoute1Path1Container: FC<FullRouterRoute1Path1ContainerProps> = ({ routePath }) => {
    console.log('FullRouterRoute1Path1Container, ' + routePath);
    return <div className={cn('taFullRouterRoute1Path1Container')}>FullRouterRoute1Path1Container</div>;
};

export default memo(FullRouterRoute1Path1Container);
