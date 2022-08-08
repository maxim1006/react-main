import { UserModel } from '@app/models/user.model';
import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { RootState } from '@app/store/store';
import {
    addThunkUserAction,
    deleteThunkUserAction,
    fetchThunkUserAction,
    updateThunkUserAction,
} from '@app/store/thunk-user/thunk-user.action';
import { isFulfilledAction, isPendingAction } from '@app/store/thunk-user/thunk-user.model';

const thunkUserAdapter = createEntityAdapter<UserModel>();

const initialState = thunkUserAdapter.getInitialState({ loading: false });

const slice = createSlice({
    name: 'thunkUser',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(fetchThunkUserAction.fulfilled, thunkUserAdapter.upsertMany);
        builder.addCase(addThunkUserAction.fulfilled, thunkUserAdapter.addOne);
        builder.addCase(updateThunkUserAction.fulfilled, (state, { payload }) => {
            const { id, ...changes } = payload;
            thunkUserAdapter.updateOne(state, { id, changes });
        });
        builder.addCase(deleteThunkUserAction.fulfilled, (state, { payload }) => {
            thunkUserAdapter.removeOne(state, payload.id);
        });
        builder.addMatcher(isPendingAction, state => {
            state.loading = true;
        });
        builder.addMatcher(isFulfilledAction, state => {
            state.loading = false;
        });
    },
});

export default slice.reducer;

export const { selectAll: selectAllThunkUsers } = thunkUserAdapter.getSelectors<RootState>(state => state.thunkUser);
