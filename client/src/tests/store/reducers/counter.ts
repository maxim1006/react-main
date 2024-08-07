import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TestsRootState } from '@app/tests/store/store';

const initialState: number = 0;

export const testsCounterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        testsIncrementAction(state, { payload }: PayloadAction<void>) {
            return state + 1;
        },
        testsDecrementAction(state, { payload }: PayloadAction<void>) {
            return state - 1;
        },
    },
});

export const { testsIncrementAction, testsDecrementAction } = testsCounterSlice.actions;

// selectors
const selectTestsCounter = (state: TestsRootState) => state.counter || 0;

export { selectTestsCounter };

export default testsCounterSlice.reducer;
