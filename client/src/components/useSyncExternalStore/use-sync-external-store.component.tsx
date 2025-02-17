import React, { memo, FC, useSyncExternalStore } from 'react';
import cn from 'classnames';

type SyncExternalStoreProps = {};

const SyncExternalStore: FC<SyncExternalStoreProps> = () => {
    const todos = useSyncExternalStore(todosStore.subscribe, todosStore.getSnapshot);

    return (
        <div className={cn('taSyncExternalStore')}>
            <button type='button' onClick={() => todosStore.addTodo()}>
                Add todo
            </button>

            <ul>
                {todos.map(todo => (
                    <li key={todo.id}>{todo.text}</li>
                ))}
            </ul>
        </div>
    );
};

export default memo(SyncExternalStore);

// helpers
let nextId = 0;
let todos = [{ id: nextId++, text: 'Todo #1' }];
let listeners: Array<() => void> = [];

export const todosStore = {
    addTodo() {
        console.log('addTodo');
        todos = [...todos, { id: nextId++, text: 'Todo #' + nextId }];
        emitChange();
    },
    subscribe(listener: () => void) {
        console.log('subscribe');
        listeners = [...listeners, listener];
        return () => {
            listeners = listeners.filter(l => l !== listener);
        };
    },
    getSnapshot() {
        console.log('getSnapshot', todos);
        return todos;
    },
};

function emitChange() {
    for (let listener of listeners) {
        listener();
    }
}
