import React, { memo, useContext } from "react";
import {
    addTodoActionCreator,
    TodosStoreReactContext
} from "../todo-store.component";
import TodoHeader from "../components/todo-header.component";

const TodoHeaderContainer = () => {
    const { store } = useContext(TodosStoreReactContext);

    return (
        <>
            {/* Это container layer component*/}
            <TodoHeader
                onClick={currentValue => {
                    store.dispatch(addTodoActionCreator(currentValue));
                }}
            />
        </>
    );
};

export default memo(TodoHeaderContainer);
