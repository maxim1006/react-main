import { TodosState } from "./todos.state";
import { VisibilityFilterState } from "./visibility-filter.state";
import { PlansState } from "./plans.state";

export * from "./todos.state";
export * from "./visibility-filter.state";
export * from "./plans.state";

export interface TodosAppState {
    readonly todos: TodosState;
    readonly visibilityFilter: VisibilityFilterState;
    readonly plans: PlansState;
}
