import { memo, useContext } from 'react';
import { TodosStoreReactContext, toggleCompleteTodoActionCreator } from '../todo-store.component';
import TodoList from '../components/todo-list.component';

const TodoListContainer = () => {
    const { store, state } = useContext(TodosStoreReactContext) as any;

    return (
        <>
            {/* Это container layer component*/}
            <TodoList
                todos={state.todos}
                currentFilter={state.visibilityFilter}
                onChange={(id, completed) => store.dispatch(toggleCompleteTodoActionCreator(id, completed))}
            />
        </>
    );
};

export default memo(TodoListContainer);
