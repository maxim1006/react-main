import { generateUniqueId } from '../../../../common/helpers/helpers';
import { TODOS_TYPES } from '../actions';
import { TodosState } from '../state';
import { ITodo } from '../../../../models/todo.model';
import { TodoActionTypes } from '../actions/todo.action-type';

const initState: TodosState = [
    {
        name: 'deeply learn redux',
        completed: false,
        id: generateUniqueId()
    }
];

export default function todosReducer(state = initState, action: TodoActionTypes) {
    switch (action.type) {
        case TODOS_TYPES.TOGGLE: {
            const { id, completed }: ITodo = action.payload as ITodo;

            return state.map((todo: ITodo) => (todo.id === id ? { ...todo, completed: !completed } : todo));
        }

        case TODOS_TYPES.ADD: {
            return [...state, action.payload];
        }

        default:
            return state;
    }
}
