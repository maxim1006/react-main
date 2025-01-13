import React, { FC, useRef } from 'react';
import mobxTodo, { MobxTodoModel } from '../store/mobx-todo';
import { observer } from 'mobx-react-lite';

type MobxTodoContainerProps = {};

const MobxTodoContainer: FC<MobxTodoContainerProps> = () => {
    const createTodoInputRef = useRef<HTMLInputElement>(null);

    const onAdd = () => () => {
        const value = createTodoInputRef.current?.value.trim();

        if (value) {
            mobxTodo.addTodo({ id: String(mobxTodo.todos.length + 1), completed: false, title: value });
        }
    };

    const onComplete = (i: MobxTodoModel) => () => mobxTodo.completeTodo(i);
    const onRemove = (i: MobxTodoModel) => () => mobxTodo.removeTodo(i.id);
    const fetchTodos = () => mobxTodo.fetchTodos();

    return (
        <div className='taMobxTodoContainer'>
            <p>
                <button type='button' onClick={fetchTodos}>
                    Fetch todos
                </button>
            </p>
            <p>
                <input ref={createTodoInputRef} type='text' />
                <button type='button' onClick={onAdd}>
                    Create Todo
                </button>
            </p>
            {mobxTodo.todos.map(i => (
                <div key={i.id} style={{ textDecoration: i.completed ? 'line-through' : '' }}>
                    {i.title}
                    <button type='button' onClick={onComplete(i)}>
                        {i.completed ? 'Revert' : 'Complete'}
                    </button>
                    <button type='button' onClick={onRemove(i)}>
                        Remove
                    </button>
                </div>
            ))}
        </div>
    );
};

export default observer(MobxTodoContainer);
