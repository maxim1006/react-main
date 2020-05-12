import React, {memo, useContext} from "react";
import {TodosStoreReactContext, toggleCompleteTodoActionCreator} from "./todo-store.component";
import TodoList from "./todo-list.component";

const TodoListContainer = () => {
    const {store, state} = useContext(TodosStoreReactContext);

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
