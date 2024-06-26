import { useCallback, useEffect, useState } from 'react';
import { useEventListener } from '@app/hooks/event-listener.hook';

export function useWindowSize() {
    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0);

    const callback = useCallback(() => {
        setWidth(window.document.documentElement.clientWidth);
        setHeight(window.document.documentElement.clientHeight);
    }, []);

    useEffect(() => {
        callback();
    }, [callback]);

    useEventListener({
        eventType: 'resize',
        callback,
        debounceTime: 500,
    });

    return {
        width,
        height,
    };
}
