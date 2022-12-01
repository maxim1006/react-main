import { useCallback, useEffect, useState } from 'react';
import throttle from 'lodash/throttle';
import { ThrottleSettings } from 'lodash';

export const THROTTLE_TIME = 1000;

const defaultThrottleConfig: ThrottleSettings = {
    trailing: true,
};

const defaultObserverConfig: ResizeObserverOptions = {
    box: 'content-box',
};

export default function useResizeObserver<T extends HTMLElement>(
    resizeCallback: (element: T) => void,
    resizeThrottleTime = THROTTLE_TIME,
    throttleConfig: ThrottleSettings = defaultThrottleConfig,
    observerConfig: ResizeObserverOptions = defaultObserverConfig
): (element: T) => void {
    const [elementToObserve, setElementToObserve] = useState<T>();

    useEffect(() => {
        if (!elementToObserve) return;

        const observer = new ResizeObserver(
            throttle(entries => resizeCallback(entries[0].target), resizeThrottleTime, throttleConfig)
        );

        observer.observe(elementToObserve, observerConfig);

        return () => observer.disconnect();
    }, [elementToObserve, resizeCallback, resizeThrottleTime, throttleConfig, observerConfig]);

    return useCallback((element: T) => setElementToObserve(element), [setElementToObserve]);
}
