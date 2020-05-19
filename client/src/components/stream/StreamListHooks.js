import React, { memo, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchStreams } from "../../store/actions";
import StreamList from "./stream-list-hooks/StreamList";
import { selectAuthIsSignedIn } from "../../store/selectors";

export default memo(() => {
    const dispatch = useDispatch();
    const auth = useSelector(selectAuthIsSignedIn);

    useEffect(() => {
        dispatch(fetchStreams());
    }, [dispatch]);

    return (
        <>
            <StreamList />
            {auth && (
                <p>
                    <Link to="/stream/create">Create stream -&gt;</Link>
                </p>
            )}
        </>
    );
});
