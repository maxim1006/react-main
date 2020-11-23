import { useCallback, useEffect, useState } from 'react';
import customAxios from '../../common/api/axios';

// можно делать через const controllerRef = useRef<any>(); а можно и через useState,
// просто нужна еще 1 функция которая будет триггерить новый CancelToken
export default ({ url }) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [cancelRequest, setCancelRequest] = useState(null);

    const refetch = useCallback(() => {
        setCancelRequest(customAxios.CancelToken.source());
    }, [setCancelRequest]);

    const refetchInner = useCallback(async () => {
        try {
            setLoading(true);

            const { data } = await customAxios.get(url, {
                cancelToken: cancelRequest?.token,
            });

            setData(data);
        } catch (e) {
            console.log(`Get request to ${url} error `, e);
        } finally {
            setLoading(false);
        }
    }, [cancelRequest, url]);

    useEffect(() => {
        refetchInner();
        return () => cancelRequest?.cancel(`Cancel get request to ${url}`);
    }, [refetchInner, cancelRequest, url]);

    return { data, refetch, loading };
};
