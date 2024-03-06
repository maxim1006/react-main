import { useRef } from 'react';

export const usePrevious = <T>(value: T): T => {
    const currentRef = useRef<T>(value);
    const previousRef = useRef<T>(null!);

    if (currentRef.current !== value) {
        previousRef.current = currentRef.current;
        currentRef.current = value;
    }

    return previousRef.current;
};
