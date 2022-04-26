import { ChangeEvent, memo, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { rtAddTodoAction, rtAddTodoPreparedAction, rtToggleTodoAction } from '@app/redux-toolkit/rt-slices/rt-todos';
import { rtSetVisibilityFilter, rtVisibilityFilters } from '@app/redux-toolkit/rt-slices/rt-visibility-filters';
import { selectRtTodosEntities } from '@app/redux-toolkit/rt-selectors';

const RtTodos = () => {
    const dispatch = useDispatch();
    const todos = useSelector(selectRtTodosEntities);
    const [todoText, setTodoText] = useState('');
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setTodoText(e.target.value);
    };

    useEffect(() => {
        console.log(todos);
    }, [todos]);

    const onFilterClick = (filter: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        dispatch(rtSetVisibilityFilter(filter));
    };

    const onTodoClick = (id: string) => () => {
        dispatch(rtToggleTodoAction(id));
    };

    const addTodoAsObject = () => {
        if (todoText.trim()) {
            dispatch(
                rtAddTodoAction({
                    text: todoText,
                    id: `${Math.random() * Date.now()}`,
                })
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

                    dispatch(rtAddTodoPreparedAction(todoText));

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
                {Object.values(rtVisibilityFilters).map((filter, index) => (
                    <a onClick={onFilterClick(filter)} href='/' style={{ marginRight: 5 }} key={index}>
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
