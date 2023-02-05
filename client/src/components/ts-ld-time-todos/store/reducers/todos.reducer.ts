import { TODOS_TYPES } from '../actions';
import { TodosState } from '../state';
import { TodoActionTypes } from '../actions/todo.action-type';
import { generateUniqueId } from '@app/common/utils/common.utils';
import { TodoModel } from '@app/models/todo.model';

const initState: TodosState = [
    {
        name: 'deeply learn redux',
        completed: false,
        id: generateUniqueId(),
    },
];

export default function todosReducer(state = initState, action: TodoActionTypes) {
    switch (action.type) {
        case TODOS_TYPES.TOGGLE: {
            const { id, completed }: TodoModel = action.payload as TodoModel;

            return state.map((todo: TodoModel) => (todo.id === id ? { ...todo, completed: !completed } : todo));
        }

        case TODOS_TYPES.ADD: {
            return [...state, action.payload];
        }

        default:
            return state;
    }
}
