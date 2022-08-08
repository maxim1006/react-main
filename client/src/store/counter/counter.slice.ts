import { createSlice } from '@reduxjs/toolkit';

// createSlice returns a "slice" object that contains the generated reducer function as a field named reducer,
// and the generated action creators inside an object called actions.
// const { actions, reducer } = counterSlice
// const { increment, decrement } = actions
export const slice = createSlice({
    name: 'counter',
    initialState: 0,
    reducers: {
        incrementAction: state => state + 1,
        decrementAction: state => state - 1,
    },
});

export default slice.reducer;

export const { incrementAction, decrementAction } = slice.actions;
