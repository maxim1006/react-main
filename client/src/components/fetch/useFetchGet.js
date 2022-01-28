import { useEffect, useState } from 'react';

export default function useFetchGet() {
    const [data, setData] = useState(null);
    const [controller, setController] = useState(null);

    const fetchUrl = '/api/fetch';

    useEffect(() => {
        (async () => {
            if (!controller) {
                // dont run on initial render
                return;
            }

            setData(null);

            try {
                const data = await fetch(fetchUrl, {
                    signal: controller.signal,
                });
                const jsonData = await data.json();
                setData(jsonData);
            } catch (e) {
                console.log('fetch component fetch error ', e);
            }
        })();

        return () => controller && controller.abort();
    }, [controller]);

    return {
        data,
        setController,
        controller,
    };
}
