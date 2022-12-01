import { useCallback, useEffect, useState } from 'react';

const defaultObserverConfig: IntersectionObserverInit = {};

export default function useIntersectionObserver<T extends HTMLElement>(
    intersectionCallback: (entry: IntersectionObserverEntry) => void,
    observerConfig: IntersectionObserverInit = defaultObserverConfig
): (element: T) => void {
    const [elementToObserve, setElementToObserve] = useState<T>();

    useEffect(() => {
        if (!elementToObserve) return;

        const observer = new IntersectionObserver(entries => intersectionCallback(entries[0]), observerConfig);

        observer.observe(elementToObserve);

        return () => observer.disconnect();
    }, [elementToObserve, intersectionCallback, observerConfig]);

    return useCallback((element: T) => setElementToObserve(element), [setElementToObserve]);
}
