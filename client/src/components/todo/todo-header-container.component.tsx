import React, {memo} from "react";
import {addTodoActionCreator, store} from "./todo-store.component";
import TodoHeader from "./todo-header.component";

const TodoHeaderContainer = () => {
    return (
        <>
            {/*Это container layer component*/}
            <TodoHeader
                onClick={(currentValue) => {
                    store.dispatch(addTodoActionCreator(currentValue));
                }}
            />
        </>
    );
};

export default memo(TodoHeaderContainer);
