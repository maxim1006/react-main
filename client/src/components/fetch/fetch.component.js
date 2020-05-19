import React, { memo } from "react";
import MaterialLoader from "../loader/MaterialLoader";
import "./fetch.component.scss";
import FetchCanvas from "./canvas/fetch-canvas.component";
import useFetchGet from "./useFetchGet";
import useFetchPost from "./useFetchPost";

export default memo(() => {
    const { data, setController, controller } = useFetchGet();
    const {
        data: postData,
        setController: setPostController,
        controller: postController
    } = useFetchPost();

    console.log(data);

    return (
        <>
            <h3>Fetch get</h3>
            <button
                type="button"
                onClick={() => {
                    setController(new AbortController());
                }}
            >
                Start fetch request
            </button>
            {data
                ? data.map(familyMember => familyMember.name)
                : controller && <MaterialLoader />}

            <h3 className="fetch__header">Fetch post</h3>
            <button
                type="button"
                onClick={() => setPostController(new AbortController())}
            >
                fetch post
            </button>
            {postData
                ? postData.message
                : postController && "Loading post data..."}
            <h3 className="fetch__header">Fetch canvas</h3>
            <FetchCanvas />
        </>
    );
});
