import { TodosAppState } from '../state';

export const selectVisibilityFilter = (state: TodosAppState) => state.visibilityFilter;
