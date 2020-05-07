import React, {memo, useEffect, useState} from "react";
import {setVisibilityFilterActionCreator, store} from "./todo-store.component";
import ToDoFilterLinks from "./todo-filter-links.component";
import useTodoState from "./use-todo-state";

const TodoFilterLinksContainer = () => {
    const state = useTodoState();

    return (
        <>
            {/*Это container layer component*/}
            <ToDoFilterLinks
                currentFilter={state.visibilityFilter}
                onClick={(filterType) => store.dispatch(setVisibilityFilterActionCreator(filterType))}
            />
        </>
    );
};

export default memo(TodoFilterLinksContainer);
