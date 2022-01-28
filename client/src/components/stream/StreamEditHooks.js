import React, { memo, useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { editStream, fetchStream } from '../../store/actions';
import StreamForm from './StreamForm';
import customAxios from '../../common/api/axios';

export default memo(({ match }) => {
    const dispatch = useDispatch();
    const stream = useSelector(state => state.streams[match.params.id]);

    useEffect(() => {
        const cancelToken = customAxios.CancelToken.source();
        dispatch(fetchStream(match.params.id, cancelToken.token));

        return () => {
            cancelToken.cancel(`Cancel fetchStream ${match.params.id}`);
        };
    }, [dispatch, match.params.id]);

    const onSubmit = useCallback(
        formValues => dispatch(editStream(match.params.id, formValues)),
        [dispatch, match.params.id]
    );

    if (stream) {
        const { title, description } = stream;

        return (
            <>
                <h3>Edit stream</h3>
                <StreamForm initialValues={{ title, description }} onSubmit={onSubmit} />

                <p>
                    <Link to='/stream'>Go to stream list -&gt;</Link>
                </p>
            </>
        );
    }
    return <div>...Loading</div>;
});
