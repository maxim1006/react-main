import axios, { CancelTokenSource } from 'axios';
import { useCallback, useEffect, useReducer, useRef } from 'react';
import customAxios from '../../../common/api/axios';

export default function useGetRequest<T>({ url, cb }: { url: string; cb?: (data: T | undefined) => void }): {
    data: T | undefined;
    loading: boolean | undefined;
    refetch: () => void;
} {
    const cancelRequest = useRef<CancelTokenSource>();
    const data = useRef<T>();
    const loading = useRef<boolean>();
    const [, forceUpdate] = useReducer(x => x + 1, 0);
    const refetch = useCallback(async () => {
        if (cancelRequest.current) {
            cancelRequest.current?.cancel(`Use get request hook is cancelled ${url}`);
        }

        cancelRequest.current = customAxios.CancelToken.source();

        try {
            loading.current = true;
            forceUpdate();

            const { data: fetchedData } = await axios.get(url, {
                cancelToken: cancelRequest.current?.token,
            });

            data.current = fetchedData;

            cb && cb(data.current);
        } catch (e) {
            console.log(`Get request to ${url} error `, e);
        } finally {
            loading.current = true;
            forceUpdate();
        }
    }, [url, cb]);

    useEffect(() => {
        refetch();
    }, [refetch]);

    return {
        data: data.current,
        loading: loading.current,
        refetch,
    };
}
