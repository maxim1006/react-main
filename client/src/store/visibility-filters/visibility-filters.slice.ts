import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export const visibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE',
};

const visibilityFilterSlice = createSlice({
    name: 'visibilityFilter',
    initialState: visibilityFilters.SHOW_ALL,
    reducers: {
        setVisibilityFilterAction: (state, { payload }: PayloadAction<string>) => payload,
    },
});

export const { setVisibilityFilterAction } = visibilityFilterSlice.actions;

export default visibilityFilterSlice.reducer;
