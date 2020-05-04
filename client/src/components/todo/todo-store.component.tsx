import React, {memo, useEffect, useState} from "react";
import {TODOS_TYPES} from "../../store/actions/types";
import {createStore} from "redux";


export interface ITodo {
    name?: string;
    completed: boolean;
    id: string;
}


const initState = [{
    name: "deeply learn redux",
    completed: false,
    id: 0
}];


const reducer = (state: any = initState, action: { type?: string, payload?: ITodo }) => {
    switch (action.type) {
        case TODOS_TYPES.TOGGLE_COMPLETE: {
            const {id, completed}: ITodo = action.payload as ITodo;
            const index = state.findIndex((i: ITodo) => i.id === id);

            state[index] = {
                ...state[index],
                completed: !completed
            };

            return [
                ...state
            ]
        }

        case TODOS_TYPES.ADD: {
            return [
                ...state,
                action.payload
            ]
        }

        default:
            return state;
    }
};

const toggleCompleteTodoActionCreator = (id: string, completed: boolean) => ({
    type: TODOS_TYPES.TOGGLE_COMPLETE,
    payload: {
        id, completed
    }
});

const store = createStore(
    reducer,
    initState,
    (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION__()
);

const TodoStore: React.FC = () => {
    const [todos, setTodos] = useState(store.getState());

    useEffect(() => {
        const storeUnsubscribe = store.subscribe(() => {
            setTodos(store.getState());
        });

        return () => storeUnsubscribe();
    }, []);

    return (
        <>
            {todos.map(({id, name, completed}: {id: string, name: string, completed: boolean}) =>
                (
                    <div key={id}>
                        <input
                            checked={completed}
                            onChange={() => store.dispatch(toggleCompleteTodoActionCreator(id, completed))}
                            type="checkbox"/>
                            {name}
                    </div>
                )
            )}
        </>
    );
};

export default memo(TodoStore);

