import { TodosState } from "./todos.state";
import { VisibilityFilterState } from "./visibility-filter.state";

export * from "./todos.state";
export * from "./visibility-filter.state";

export interface TodosAppState {
    readonly todos: TodosState;
    readonly visibilityFilter: VisibilityFilterState;
}
