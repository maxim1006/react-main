import { useEffect, useState } from 'react';

export default function UseFetchPost() {
    const [data, setData] = useState(null);
    const [controller, setController] = useState(null);

    useEffect(() => {
        (async () => {
            if (!controller) {
                // dont run on initial render
                return;
            }

            try {
                const response = await fetch('http://localhost:3001/api/fetch/post', {
                    signal: controller.signal,
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json;charset=utf-8'
                    },
                    body: JSON.stringify({
                        message: 'Howdy stranger!'
                    })
                });

                const jsonData = await response.json();
                setData(jsonData);
                console.log('fetchPost result ', jsonData);
            } catch (e) {
                console.log('useFetchPost http://localhost:3001/api/fetch/post error ', e);
            }
        })();

        return () => {
            controller && controller.abort();
        };
    }, [controller]);

    return {
        data,
        setController,
        controller
    };
}
