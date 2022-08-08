import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TodoModel } from '@app/models/todo.model';

// createSlice and createReducer wrap your function with produce from the Immer library.
/** @see https://immerjs.github.io/immer/docs/introduction*/
interface TodosStateModel {
    entities: TodoModel[];
}

const initialState: TodosStateModel = {
    entities: [],
};

const todosSlice = createSlice({
    name: 'todos',
    initialState,
    // reducers - an object, where the keys will become action type strings, and the functions are reducers that will
    // be run when that action type is dispatched.
    reducers: {
        addTodoAction(state, { payload }: PayloadAction<TodoModel>) {
            state.entities.push(payload);
        },
        addTodoPreparedAction: {
            reducer: (state, { payload }: PayloadAction<TodoModel>) => {
                const { id, text } = payload;
                state.entities.push({ id, text, completed: false });
            },
            // если нужно кастомно подготовить то что прокидываю в экшн, по умолчанию все что передасться при
            // вызове экшена попадет в пейлоад, однако если нужен кастом делаю prepare
            prepare: (text: string): { payload: TodoModel } => ({
                payload: { text, id: `${Math.random() * Date.now()}` },
            }),
        },
        toggleTodoAction(state, { payload }: PayloadAction<string>) {
            const todo = state.entities.find(todo => todo.id === payload);

            if (todo) {
                todo.completed = !todo.completed;
            }
        },
    },
});

export const { addTodoPreparedAction, toggleTodoAction, addTodoAction } = todosSlice.actions;

export default todosSlice.reducer;
