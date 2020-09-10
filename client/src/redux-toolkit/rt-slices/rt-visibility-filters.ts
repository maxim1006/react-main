import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TodoModel } from '../models/todo.model';

export const rtVisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE'
};

const rtVisibilityFilterSlice = createSlice({
    name: 'visibilityFilter',
    initialState: rtVisibilityFilters.SHOW_ALL,
    reducers: {
        rtSetVisibilityFilter: (state, { payload }: PayloadAction<string>) => payload
    }
});

export const { rtSetVisibilityFilter } = rtVisibilityFilterSlice.actions;

export default rtVisibilityFilterSlice.reducer;
