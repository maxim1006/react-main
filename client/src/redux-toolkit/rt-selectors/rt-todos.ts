import { createSelector } from '@reduxjs/toolkit';
import { rtVisibilityFilters } from '../rt-slices/rt-visibility-filters';
import { RtRootState } from '../rt-configureStore';

const selectRtTodos = (state: RtRootState) => state.todos;

const selectVisibilityFilter = (state: RtRootState) => state.visibilityFilter;

const selectRtTodosEntities = createSelector([selectRtTodos], todosState => todosState.entities);

const selectRtVisibleTodos = createSelector(
    [selectRtTodosEntities, selectVisibilityFilter],
    (todos, visibilityFilter) => {
        switch (visibilityFilter) {
            case rtVisibilityFilters.SHOW_ALL: {
                return todos;
            }
            case rtVisibilityFilters.SHOW_COMPLETED: {
                return todos.filter(i => i.completed);
            }
            case rtVisibilityFilters.SHOW_ACTIVE: {
                return todos.filter(i => !i.completed);
            }
            default:
                return todos;
        }
    }
);

export { selectRtTodos, selectVisibilityFilter, selectRtTodosEntities };
