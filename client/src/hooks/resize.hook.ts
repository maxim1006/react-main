import { useEffect } from 'react';
import { throttle } from 'lodash';

export const RESIZE_THROTTLE_TIME = 1000;

export function useResize(resizeEventHandler: () => void, resizeThrottleTime = RESIZE_THROTTLE_TIME) {
    useEffect(() => {
        const throttledWindowResizeHandler = throttle(resizeEventHandler, resizeThrottleTime, {
            trailing: true,
        });

        window.addEventListener('resize', throttledWindowResizeHandler);

        return () => {
            window.removeEventListener('resize', throttledWindowResizeHandler);
        };
    }, [resizeEventHandler, resizeThrottleTime]);
}
