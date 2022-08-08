import { TODOS_TYPES } from './types';
import { TodoModel } from '../../../../models/todo.model';

interface ToggleTodoActionType {
    type: typeof TODOS_TYPES.TOGGLE;
    payload: {
        id: string;
        completed: boolean;
    };
}

interface AddTodoActionType {
    type: typeof TODOS_TYPES.ADD;
    payload: TodoModel;
}

export type TodoActionTypes = ToggleTodoActionType | AddTodoActionType;
