import customAxios from "../../common/api/axios";
import {useEffect, useState} from "react";

export default ({url}) => {
    const cancelRequest = customAxios.CancelToken.source();
    const [data, setData] = useState(null);

    useEffect(() => {
        (async (url) => {
            try {
                const {data} = await customAxios.get(url, {
                    cancelToken: cancelRequest.token
                });

                setData(data);
            } catch (e) {
                console.log(`Get request to ${url} error `, e);
            }
        })(url);

        return () => cancelRequest.cancel(`Cancel get request to ${url}`)
    }, []);

    return data;

}
