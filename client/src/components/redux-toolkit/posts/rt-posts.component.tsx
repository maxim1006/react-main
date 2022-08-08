import { memo, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { fetchPostsAction, fetchPostsAction1, makeSelectPostsByTitle, selectPosts } from '@app/store/posts/posts.slice';
import { useAppDispatch } from '@app/store/store';
import MaterialLoaderComponent from '../../loader/MaterialLoader';
import { useMemoSelector } from '@app/store/hooks/memo-selector.hook';

const RtPosts = () => {
    const dispatch = useAppDispatch();
    const { loading, entities, error } = useSelector(selectPosts);

    // https://react-redux.js.org/api/hooks#using-memoizing-selectors
    // пример селекта по id
    // const selectItemsByCategory = useMemo(makeSelectRtPostsByTitle, []);
    // const itemsByTitle = useAppSelector(state => selectItemsByCategory(state, 'a'));

    // тоже что и выше только через кастомный хук
    const itemsByTitleMemo = useMemoSelector(makeSelectPostsByTitle, 'a');

    console.log({ itemsByTitleMemo });

    useEffect(() => {
        (async () => {
            //  пример thunk возвращает промис с результатом запроса, круто чтобы чейнинг использовать !!!
            const posts = await dispatch(fetchPostsAction());
            const posts1 = await dispatch(fetchPostsAction1());
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
