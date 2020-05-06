import React, {memo, useEffect, useState} from "react";
import {setVisibilityFilterActionCreator, store} from "./todo-store.component";
import ToDoFilterLinks from "./todo-filter-links.component";

const TodoFilterLinksContainer = () => {
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
            <ToDoFilterLinks
                currentFilter={state.visibilityFilter}
                onClick={(filterType) => store.dispatch(setVisibilityFilterActionCreator(filterType))}
            />
        </>
    );
};

export default memo(TodoFilterLinksContainer);
