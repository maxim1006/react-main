import { useEffect, useMemo, useRef } from 'react';
import { debounce } from 'lodash';

export function useDebouncedCallback<T extends (...args: any[]) => any>(func: T, delay = 500) {
    const funcRef = useRef(func);

    // при изменении входной функции обновляю ее в ref
    useEffect(() => {
        funcRef.current = func;
    }, [func]);

    const debounced = useMemo(() => {
        const debouncedFn = debounce((...args: Parameters<T>) => funcRef.current(...args), delay);
        return debouncedFn;
    }, [delay]);

    useEffect(() => {
        return () => {
            debounced.cancel();
        };
    }, [debounced]);

    return debounced;
}
