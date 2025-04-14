import axios, { CancelTokenSource } from 'axios';
import { useCallback, useEffect, useRef, useState } from 'react';
import customAxios from '../../../common/api/axios';

export default function useGetRequest<T>({ url, cb }: { url: string; cb?: (data: T) => void }): {
    data: T | null;
    loading: boolean;
    refetch: () => void;
} {
    const cancelRequest = useRef<CancelTokenSource>();
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);

    const refetch = useCallback(async () => {
        if (cancelRequest.current) {
            cancelRequest.current?.cancel(`Use get request hook iscancelled ${url}`);
        }

        cancelRequest.current = customAxios.CancelToken.source();

        try {
            setLoading(true);

            const { data } = await axios.get(url, {
                cancelToken: cancelRequest.current?.token,
            });

            setData(data);

            cb && cb(data);
        } catch (e) {
            console.log(`Get request to ${url} error `, e);
        } finally {
            setLoading(false);
        }
    }, [url, cb]);

    useEffect(() => {
        refetch();
    }, [refetch]);

    return {
        data,
        loading,
        refetch,
    };
}
