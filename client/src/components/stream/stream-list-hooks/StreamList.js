import { Link } from 'react-router-dom';
import React, { memo, useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Stream from '../Stream';
import StreamControls from './StreamControls';
import { deleteStream } from '../../../store/actions';
import ModalPortal from '../../portals/modal/ModalPortal';
import { selectAuthUserId, selectStreams } from '../../../store/selectors';

export default memo(() => {
    const dispatch = useDispatch();
    const streams = useSelector(selectStreams);
    const currentUserId = useSelector(selectAuthUserId);
    const [streamToDelete, setStreamToDelete] = useState(null);

    const onDeleteClick = useCallback(
        stream => () => {
            setStreamToDelete(stream);
        },
        []
    );

    const onModalDeleteButtonClick = useCallback(() => {
        dispatch(deleteStream(streamToDelete.id));
        setStreamToDelete(null);
    }, [dispatch, streamToDelete]);

    const onModalHideButtonClick = useCallback(() => {
        setStreamToDelete(null);
    }, []);

    const controls = (
        <>
            <button type='button' onClick={onModalDeleteButtonClick}>
                Delete
            </button>
            <button type='button' onClick={onModalHideButtonClick}>
                Cancel
            </button>
        </>
    );

    return (
        <>
            <ul className='stream-list'>
                {Object.entries(streams).map(([id, stream]) => {
                    return (
                        <li key={id} className='stream-list__item'>
                            <Stream {...stream} title={<Link to={`/stream/${stream.id}`}>{stream.title}</Link>} />

                            <StreamControls
                                stream={stream}
                                currentUserId={currentUserId}
                                onDeleteClick={onDeleteClick(stream)}
                            />
                        </li>
                    );
                })}
            </ul>

            {streamToDelete && <ModalPortal title='Are u sure u wanna delete this stream?' controls={controls} />}
        </>
    );
});
