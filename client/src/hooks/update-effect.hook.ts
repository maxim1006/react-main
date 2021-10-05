import { useEffect, useRef } from 'react';

export function useUpdateEffect(callback: any, dependencies: any) {
    const firstRenderRef = useRef(true);
    useEffect(() => {
        if (firstRenderRef.current) {
            firstRenderRef.current = false;
            return;
        }
        return callback();
        // because handle cb ourselves
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, dependencies);
}
