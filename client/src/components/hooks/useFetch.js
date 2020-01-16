import {useEffect, useState} from "react";

export default ({url}) => {
    const [data, setData] = useState(null);

    useEffect(() => {
        (async () => {
            try {
                const fetch = await window.fetch(url);
                const jsonData = await fetch.json();

                setData(jsonData);
            } catch (e) {
                console.log(`useFetch ${url} error `, e);
            }
        })();

    }, []);

    return data
};
