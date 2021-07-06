import { TODOS_TYPES } from './types';
import { generateUniqueId } from '../../../../common/helpers/helpers';
import { TodoActionTypes } from './todo.action-type';

export const toggleTodo = (id: string, completed: boolean): TodoActionTypes => ({
    type: TODOS_TYPES.TOGGLE,
    payload: {
        id,
        completed,
    },
});

export const addTodo = (name: string): TodoActionTypes => ({
    type: TODOS_TYPES.ADD,
    payload: {
        name,
        completed: false,
        id: generateUniqueId(),
    },
});
