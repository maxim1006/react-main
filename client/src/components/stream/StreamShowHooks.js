import React, {memo, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchStream} from "../../store/actions";
import {Link} from "react-router-dom";
import {selectStreamsById} from "../../store/selectors";

export default memo(({match}) => {
    const dispatch = useDispatch();
    const stream = useSelector(state => selectStreamsById(state, match.params.id));

    useEffect(() => {
        dispatch(fetchStream(match.params.id));
    }, []);

    if (stream) {
        return (
            <>
                <h3>Stream show</h3>
                <p>Stream title: {stream.title}</p>
                <p>Stream description: {stream.description}</p>
                <Link to="/stream">Go to stream list</Link>
            </>
        );
    } else {
        return <div>...Loading</div>;
    }
});
