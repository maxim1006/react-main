import React, { memo, FC } from 'react';
import cn from 'classnames';

type FullRouterGeneralContainerProps = {};

const FullRouterGeneralContainer: FC<FullRouterGeneralContainerProps> = () => {
    return <div className={cn('taFullRouterGeneralContainer')}>FullRouterGeneralContainer</div>;
};

export default memo(FullRouterGeneralContainer);
