import { useCallback, useRef } from 'react';

export function useRunOnce() {
    const disableHookRef = useRef<boolean>();

    return useCallback((callback: () => void) => {
        if (!disableHookRef.current) {
            callback();
            disableHookRef.current = true;
        }
    }, []);
}
