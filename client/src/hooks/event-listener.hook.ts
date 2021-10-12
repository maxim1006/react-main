import { useEffect } from 'react';
import { debounce, throttle } from 'lodash';

export function useEventListener<T extends UIEvent>({
    eventType,
    callback,
    element = window,
    throttleTime = 0,
    debounceTime = 0
}: {
    eventType: keyof WindowEventMap;
    callback: (e: T) => void;
    element?: HTMLElement | Window;
    throttleTime?: number;
    debounceTime?: number;
}) {
    useEffect(() => {
        if (element == null) return;
        const handler = (e: T) => callback(e);

        const throttledHandler = throttle(handler, throttleTime, {
            trailing: true
        });

        const debounceHandler = debounce(handler, debounceTime, {
            trailing: true
        });

        const finalHandler = throttleTime ? throttledHandler : debounceTime ? debounceHandler : handler;

        element.addEventListener(eventType, finalHandler as any);

        return () => element.removeEventListener(eventType, finalHandler as any);
    }, [eventType, element, throttleTime, debounceTime, callback]);
}
