import { createSelector } from '@reduxjs/toolkit';
import { rtVisibilityFilters } from '../rt-slices/rt-visibility-filters';

const selectTodos = state => state.todos;
const selectVisibilityFilter = state => state.visibilityFilter;

export const selectRtVisibleTodos = createSelector([selectTodos, selectVisibilityFilter], (todos, visibilityFilter) => {
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
});
