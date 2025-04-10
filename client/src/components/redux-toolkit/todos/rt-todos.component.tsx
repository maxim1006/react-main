import { ChangeEvent, memo, useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodoAction, addTodoPreparedAction, toggleTodoAction } from '@app/store/todos/todos.slice';
import { setVisibilityFilterAction, visibilityFilters } from '@app/store/visibility-filters/visibility-filters.slice';
import { selectTodosEntities } from '@app/store/todos/todos.selector';

const RtTodos = () => {
    const dispatch = useDispatch();
    const todos = useSelector(selectTodosEntities);
    const [todoText, setTodoText] = useState('');
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setTodoText(e.target.value);
    };

    useEffect(() => {
        console.log(todos);
    }, [todos]);

    const onFilterClick = (filter: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        dispatch(setVisibilityFilterAction(filter));
    };

    // const onTodoClick = (id: string) => () => {
    //     dispatch(toggleTodoAction(id));
    // };

    const onTodoClick = useCallback(
        (id: string) => {
            return () => {
                dispatch(toggleTodoAction(id));
            };
        },
        [dispatch],
    );

    const addTodoAsObject = () => {
        if (todoText.trim()) {
            dispatch(
                addTodoAction({
                    text: todoText,
                    id: `${Math.random() * Date.now()}`,
                }),
            );
        }
    };

    return (
        <div>
            <form
                onSubmit={e => {
                    e.preventDefault();

                    if (!todoText.trim()) {
                        return;
                    }

                    dispatch(addTodoPreparedAction(todoText));

                    setTodoText('');
                }}
            >
                <input value={todoText} onChange={onChange} />
                <button type='submit'>Add Todo</button>
                <button onClick={addTodoAsObject} type='button'>
                    Add Todo separately
                </button>
            </form>
            <div>
                {Object.values(visibilityFilters).map(filter => (
                    <a onClick={onFilterClick(filter)} href='/' style={{ marginRight: 5 }} key={crypto.randomUUID()}>
                        {filter}
                    </a>
                ))}
            </div>
            {todos.length > 0 && (
                <ul>
                    {todos.map(({ text, id, completed }) => (
                        <li
                            style={{ textDecoration: completed ? 'line-through' : 'none' }}
                            onClick={onTodoClick(id)}
                            key={id}
                        >
                            {text}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default memo(RtTodos);
