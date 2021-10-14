import React, { memo, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { rtFetchPostsAction } from '@app/redux-toolkit/rt-slices/rt-posts';
import { AppDispatch, RtRootState } from '@app/redux-toolkit/rt-configureStore';
import MaterialLoaderComponent from '../../loader/MaterialLoader';

const RtPosts = () => {
    const dispatch = useDispatch<AppDispatch>();
    const posts = useSelector((state: RtRootState) => state.posts);

    useEffect(() => {
        (async () => {
            //  пример thunk возвращает промис с результатом запроса, круто чтобы чейнинг использовать !!!
            const posts = await dispatch(rtFetchPostsAction());
            console.log(posts);
        })();
    }, [dispatch]);

    return posts.loading ? (
        <MaterialLoaderComponent />
    ) : (
        <ul>
            {posts.entities.slice(0, 5).map(({ id, title, body }) => (
                <li style={{ margin: 10 }} key={id}>
                    <h5>{title}</h5>
                    <p>{body}</p>
                </li>
            ))}
        </ul>
    );
};

export default memo(RtPosts);
