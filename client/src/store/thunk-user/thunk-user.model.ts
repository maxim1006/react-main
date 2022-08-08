import { AnyAction, AsyncThunk } from '@reduxjs/toolkit';

type GenericAsyncThunk = AsyncThunk<unknown, unknown, any>;
type PendingAction = ReturnType<GenericAsyncThunk['pending']>;

export function isPendingAction(action: AnyAction): action is PendingAction {
    return action.type.endsWith('/pending');
}
export function isFulfilledAction(action: AnyAction): action is PendingAction {
    return action.type.endsWith('/fulfilled');
}
