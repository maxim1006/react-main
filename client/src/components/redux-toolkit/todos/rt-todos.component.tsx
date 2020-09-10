import React, { ChangeEvent, memo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { rtAddTodo, rtToggleTodo } from '../../../redux-toolkit/rt-slices/rt-todos';
import { rtSetVisibilityFilter, rtVisibilityFilters } from '../../../redux-toolkit/rt-slices/rt-visibility-filters';
import { selectRtVisibleTodos } from '../../../redux-toolkit/rt-selectors';
import { RtRootState } from '../../../redux-toolkit/rt-configureStore';
import { TodoModel } from '../../../redux-toolkit/models/todo.model';

const RtTodos = () => {
    const dispatch = useDispatch();
    const todos = useSelector<RtRootState>(selectRtVisibleTodos) as TodoModel[];
    const [todoText, setTodoText] = useState('');
    const onChange = (e: ChangeEvent<HTMLInputElement>) => setTodoText(e.target.value);

    const onFilterClick = (filter: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        dispatch(rtSetVisibilityFilter(filter));
    };

    const onTodoClick = (id: number) => () => {
        dispatch(rtToggleTodo(id));
    };

    return (
        <div>
            <form
                onSubmit={e => {
                    e.preventDefault();
                    if (!todoText.trim()) {
                        return;
                    }
                    dispatch(rtAddTodo(todoText));
                    setTodoText('');
                }}
            >
                <input value={todoText} onChange={onChange} />
                <button type="submit">Add Todo</button>
            </form>
            <div>
                {Object.values(rtVisibilityFilters).map((filter, index) => (
                    <a onClick={onFilterClick(filter)} href="/" style={{ marginRight: 5 }} key={index}>
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
