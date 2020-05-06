import React, {memo, useEffect, useState} from "react";
import {store, toggleCompleteTodoActionCreator} from "./todo-store.component";
import TodoList from "./todo-list.component";

const TodoListContainer = () => {
    const [state, setState] = useState(store.getState());

    useEffect(() => {
        const storeUnsubscribe = store.subscribe(() => {
            setState(store.getState());
        });

        return () => storeUnsubscribe();
    }, []);

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
