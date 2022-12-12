import React, { memo, FC } from 'react';
import cn from 'classnames';

type FullRouterRoute1PathContainerProps = {
    routePath?: string;
};

const FullRouterRoute1PathContainer: FC<FullRouterRoute1PathContainerProps> = ({ routePath }) => {
    console.log('FullRouterRoute1PathContainer, ' + routePath);
    return <div className={cn('taFullRouterRoute1PathContainer')}>FullRouterRoute1PathContainer</div>;
};

export default memo(FullRouterRoute1PathContainer);
