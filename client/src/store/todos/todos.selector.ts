import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '@app/store/store';
import { visibilityFilters } from '@app/store/visibility-filters/visibility-filters.slice';

const selectTodos = (state: RootState) => state.todos;

const selectVisibilityFilter = (state: RootState) => state.visibilityFilter;

const selectTodosEntities = createSelector([selectTodos], todosState => todosState.entities);

/* eslint-disable */
const selectVisibleTodos = createSelector([selectTodosEntities, selectVisibilityFilter], (todos, visibilityFilter) => {
    switch (visibilityFilter) {
        case visibilityFilters.SHOW_ALL: {
            return todos;
        }
        case visibilityFilters.SHOW_COMPLETED: {
            return todos.filter(i => i.completed);
        }
        case visibilityFilters.SHOW_ACTIVE: {
            return todos.filter(i => !i.completed);
        }
        default:
            return todos;
    }
});

export { selectTodos, selectVisibilityFilter, selectTodosEntities };
