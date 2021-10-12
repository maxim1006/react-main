import { MutableRefObject, useEffect, useState } from 'react';

export function useOnScreen(ref: MutableRefObject<HTMLDivElement>, rootMargin = '0px') {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            entries => {
                entries.forEach((entry: IntersectionObserverEntry) => {
                    setVisible(entry.isIntersecting);
                });
            },
            { rootMargin }
        );

        observer.observe(ref.current);

        return () => observer.disconnect();
    }, [ref, rootMargin]);

    return visible;
}
