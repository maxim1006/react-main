import {TODOS_TYPES} from "./types";
import {generateUniqueId} from "../../../../common/helpers/helpers";

export const toggleTodo = (id: string, completed: boolean) => ({
    type: TODOS_TYPES.TOGGLE,
    payload: {
        id, completed
    }
});

export const addTodo = (name: string) => ({
    type: TODOS_TYPES.ADD,
    payload: {
        name,
        completed: false,
        id: generateUniqueId()
    }
});