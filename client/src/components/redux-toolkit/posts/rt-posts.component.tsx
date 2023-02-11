import { Fragment, memo, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import {
    fetchPostsAction,
    fetchPostsAction1,
    makeSelectPostsByTitle,
    makeSelectPostsByTitle1,
    selectPosts,
} from '@app/store/posts/posts.slice';
import { useAppDispatch, useAppSelector } from '@app/store/store';
import MaterialLoaderComponent from '../../loader/MaterialLoader';
import { useMemoSelector } from '@app/store/hooks/memo-selector.hook';

const RtPosts = () => {
    const [state, setState] = useState('');
    const dispatch = useAppDispatch();

    const { loading, entities, error } = useSelector(selectPosts);

    // https://react-redux.js.org/api/hooks#using-memoizing-selectors
    // пример селекта по id
    // const selectItemsByCategory = useMemo(makeSelectRtPostsByTitle, []);
    // const itemsByTitle = useAppSelector(state => selectItemsByCategory(state, 'a'));

    // тоже что и выше только через кастомный хук
    // const itemsByTitleMemo = useMemoSelector(makeSelectPostsByTitle, 'a');
    // const itemsByTitleMemo = useMemoSelector(makeSelectPostsByTitle, 'a');

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
            {/*Тут пример с мемоизированными селекторами в компонентах vs просто createSelector, вывод - мемоизированный вызовется только когда меняется входная проперти, itemsByTitleMemo1 будет вызываться каждый раз. Обрати внимание что пропертя передается только в Child и меняется там, во втором она типо должна закешироваться что  не срабатывает для itemsByTitleMemo1*/}
            <button onClick={() => setState(i => (i += 'a'))}>Click</button>

            <Child prop={state} />
            <Child1 />
            {entities.slice(0, 5).map(({ id, title, body }) => (
                <li style={{ margin: 10 }} key={id}>
                    <h5>{title}</h5>
                    <p>{body}</p>
                </li>
            ))}
        </ul>
    );
};

function Child({ prop }: { prop: string }) {
    const itemsByTitleMemo = useMemoSelector(makeSelectPostsByTitle, prop);
    const itemsByTitleMemo1 = useAppSelector(state => makeSelectPostsByTitle1(state, prop));
    console.log('Child rerender');
    return (
        <>
            {itemsByTitleMemo1.map(i => (
                <Fragment key={i.id}>{i.title}</Fragment>
            ))}
            {itemsByTitleMemo.map(i => (
                <Fragment key={i.id}>{i.title}</Fragment>
            ))}
        </>
    );
}

function Child1({ prop = 'a' }: { prop?: string }) {
    const itemsByTitleMemo = useMemoSelector(makeSelectPostsByTitle, prop);
    const itemsByTitleMemo1 = useAppSelector(state => makeSelectPostsByTitle1(state, prop));
    console.log('Child1 rerender');
    return (
        <>
            {itemsByTitleMemo1.map(i => (
                <Fragment key={i.id}>{i.title}</Fragment>
            ))}
            {itemsByTitleMemo.map(i => (
                <Fragment key={i.id}>{i.title}</Fragment>
            ))}
        </>
    );
}

export default memo(RtPosts);
