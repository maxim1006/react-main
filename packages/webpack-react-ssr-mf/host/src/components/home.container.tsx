import cn from 'classnames';
import React, { memo } from 'react';

type HomeContainerProps = {};

const HomeContainer = memo<HomeContainerProps>(() => {
    return <div className={'taHomeContainer'}>HomeContainer</div>;
});

export { HomeContainer };
