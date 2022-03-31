import { memo, useEffect, useMemo } from 'react';
import { useSelector } from 'react-redux';
import {
    makeSelectRtPostsByTitle,
    rtFetchPostsAction,
    rtFetchPostsAction1,
    selectRtPosts,
} from '@app/redux-toolkit/rt-slices/rt-posts';
import { useAppDispatch, useAppSelector } from '@app/redux-toolkit/rt-configureStore';
import MaterialLoaderComponent from '../../loader/MaterialLoader';

const RtPosts = () => {
    const dispatch = useAppDispatch();
    const { loading, entities, error } = useSelector(selectRtPosts);

    // https://react-redux.js.org/api/hooks#using-memoizing-selectors
    // пример селекта по id
    const selectItemsByCategory = useMemo(makeSelectRtPostsByTitle, []);
    const itemsByTitle = useAppSelector(state => selectItemsByCategory(state, 'a'));

    console.log({ itemsByTitle });

    useEffect(() => {
        (async () => {
            //  пример thunk возвращает промис с результатом запроса, круто чтобы чейнинг использовать !!!
            const posts = await dispatch(rtFetchPostsAction());
            const posts1 = await dispatch(rtFetchPostsAction1());
            console.log({
                posts,
                posts1,
            });
        })();
    }, [dispatch]);

    if (error) return <>{error}</>;

    return loading ? (
        <MaterialLoaderComponent />
    ) : (
        <ul>
            {entities.slice(0, 5).map(({ id, title, body }) => (
                <li style={{ margin: 10 }} key={id}>
                    <h5>{title}</h5>
                    <p>{body}</p>
                </li>
            ))}
        </ul>
    );
};

export default memo(RtPosts);
