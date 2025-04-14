import React, { memo } from 'react';
import { useHover } from '@app/hooks/use-hover.hook';

type UseHoverProps = {};

const UseHover = memo<UseHoverProps>(() => {
    const [ref, isHovered] = useHover<HTMLDivElement>();

    return (
        <div ref={ref} className='taUseHover'>
            {isHovered ? 'hovered' : 'not hovered'}
        </div>
    );
});

export { UseHover };
