import { MutableRefObject, useCallback, useEffect, useState } from 'react';
import { debounce } from 'lodash';
import { useEventListener } from '@app/hooks/event-listener.hook';

export const SCROLL_DEBOUNCE_TIME = 100;

export function useOverflow<T extends HTMLElement>(
    refElement: MutableRefObject<T | null>,
    scrollDebounceTime = SCROLL_DEBOUNCE_TIME
) {
    const [isLeftSideOverflown, setLeftSideOverflown] = useState(false);
    const [isRightSideOverflown, setRightSideOverflown] = useState(false);
    const [isTopSideOverflown, setTopSideOverflown] = useState(false);
    const [isBottomSideOverflown, setBottomSideOverflown] = useState(false);

    const detectOverflow = useCallback(() => {
        if (refElement?.current) {
            setLeftSideOverflown(refElement.current.scrollLeft > 0);
            setTopSideOverflown(refElement.current.scrollTop > 0);

            setRightSideOverflown(
                refElement.current.offsetWidth + refElement.current.scrollLeft !== refElement.current.scrollWidth
            );

            setBottomSideOverflown(
                refElement.current.offsetHeight + refElement.current.scrollTop !== refElement.current.scrollHeight
            );
        }
    }, [refElement]);

    // We have to listen resize event as well
    useEventListener({
        eventType: 'resize',
        callback: detectOverflow,
        throttleTime: 1000,
    });

    useEffect(() => {
        detectOverflow();
        const debouncedDetectOverflow = debounce(detectOverflow, scrollDebounceTime, { trailing: true });

        const element = refElement?.current;
        if (element) {
            element.addEventListener('scroll', debouncedDetectOverflow);
            return () => {
                element.removeEventListener('scroll', debouncedDetectOverflow);
            };
        }
    }, [refElement, detectOverflow, scrollDebounceTime]);

    return {
        isLeftSideOverflown,
        isRightSideOverflown,
        isTopSideOverflown,
        isBottomSideOverflown,
    };
}
