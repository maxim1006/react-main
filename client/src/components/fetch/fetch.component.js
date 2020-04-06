import React, {memo, useEffect, useState} from "react";
import MaterialLoader from "../loader/MaterialLoader";
import "./fetch.component.scss";
import FetchCanvas from "./canvas/fetch-canvas.component";

export default memo(() => {
    const [data, setData] = useState(null);
    let [controller, setController] = useState(null);

    const fetchUrl = "/api/fetch";

    useEffect(() => {
        (async () => {
            if (!controller) {
                // dont run on initial render
                return;
            }

            setData(null);

            try {
                const data = await fetch(fetchUrl, {signal: controller.signal});
                const jsonData = await data.json();
                setData(jsonData);
            } catch (e) {
                console.log("fetch component fetch error ", e);
            }
        })();

        return () => controller && controller.abort();
    }, [controller]);

    const fetchPost = async () => {
        let response = await fetch('http://localhost:3001/api/fetch/post', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify({
                message: "Howdy stranger!"
            })
        });

        let result = await response.json();
        console.log("fetchPost result ", result);
    };

    return (
        <>
            <h3>Fetch get</h3>
            <button type="button" onClick={() => {
                setController(new AbortController());
            }}>
                Start fetch request
            </button>
            {
                data ?
                    data.map(familyMember => familyMember.name)
                    : controller && <MaterialLoader/>
            }

            <h3 className="fetch__header">Fetch post</h3>
            <button type="button" onClick={() => fetchPost()}>fetch post</button>

            <h3 className="fetch__header">Fetch canvas</h3>
            <FetchCanvas />
        </>
    );
});
