import React, {memo} from "react";
import {store, toggleCompleteTodoActionCreator} from "./todo-store.component";
import TodoList from "./todo-list.component";
import useTodoState from "./use-todo-state";

const TodoListContainer = () => {
    const state = useTodoState();

    return (
        <>
            {/*Это container layer component*/}
            <TodoList
                todos={state.todos}
                currentFilter={state.visibilityFilter}
                onChange={(id, completed) => store.dispatch(toggleCompleteTodoActionCreator(id, completed))}
            />
        </>
    );
};

export default memo(TodoListContainer);
