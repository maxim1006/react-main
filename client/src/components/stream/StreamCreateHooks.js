import { memo, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { createStream } from "@app/store/actions";
import StreamForm from './StreamForm';

export default memo(() => {
    const dispatch = useDispatch();
    // хоть чайлд и использует memo(() => {}) все равно должен использовать useCallback, чтобы замемоизировать функцию которую прокидываю
    // в проперти чайлда, иначе чайлд будет постоянно ререндериться
    const onSubmit = useCallback(formValues => dispatch(createStream(formValues)), [dispatch]);

    return (
        <>
            <StreamForm onSubmit={onSubmit} />

            <p>
                <Link to='/stream'>Go to stream list -&gt;</Link>
            </p>
        </>
    );
});
