import { TodosAppState } from "../state";

export const selectTodos = (state: TodosAppState) => state.todos;
