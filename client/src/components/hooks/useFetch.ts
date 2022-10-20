import { useCallback, useEffect, useRef, useState } from 'react';

export default function useFetch({ url }: { url?: string; controller?: any }) {
    const [data, setData] = useState(null);
    const controllerRef = useRef<any>();

    const refetch = useCallback(async () => {
        if (controllerRef.current) {
            controllerRef.current.abort();
        }

        controllerRef.current = new AbortController();

        try {
            const fetch = await window.fetch(url, { signal: controllerRef.current?.signal });
            const jsonData = await fetch.json();

            setData(jsonData);
        } catch (e) {
            console.log(`useFetch ${url} error `, e);
        }
    }, [url]);

    // init fetch
    useEffect(() => {
        void refetch();
    }, [refetch]);

    return { data, refetch };
}

// если писать через простой useEffect
// useEffect(() => {
//     const controller = new AbortController();
//     fetch(url, { signal: controller.signal }).then().catch().finally();
//
//     return () => controller.abort();
// }, [url]);
