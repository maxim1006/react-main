import { createSlice } from '@reduxjs/toolkit';

// createSlice returns a "slice" object that contains the generated reducer function as a field named reducer,
// and the generated action creators inside an object called actions.
// const { actions, reducer } = counterSlice
// const { increment, decrement } = actions
export const rtCounterSlice = createSlice({
    name: 'counter',
    initialState: 0,
    reducers: {
        rtIncrement: state => state + 1,
        rtDecrement: state => state - 1,
    },
});

export const { rtIncrement, rtDecrement } = rtCounterSlice.actions;

export default rtCounterSlice.reducer;

/*
* createSlice returns an object that looks like this:

{
  name: "counter",
  reducer: (state, action) => newState,
  actions: {
    rtIncrement: (payload) => ({type: "counter/rtIncrement", payload}),
    rtDecrement: (payload) => ({type: "counter/rtDecrement", payload})
  },
  caseReducers: {
    rtIncrement: (state, action) => newState,
    rtDecrement: (state, action) => newState,
  }
}*/
