import { useEffect, useState } from "react";

export default ({ url, controller }: { url: string; controller?: any }) => {
    const [data, setData] = useState(null);

    useEffect(() => {
        (async () => {
            try {
                const fetch = controller
                    ? await window.fetch(url)
                    : await window.fetch(url, { signal: controller.signal });
                const jsonData = await fetch.json();

                setData(jsonData);
            } catch (e) {
                controller && controller.abort();
                console.log(`useFetch ${url} error `, e);
            }
        })();
    }, []);

    return data;
};
