import { RootState } from './store-with-protected-actions';

const storeWithProtectedActionsSelector = (state: RootState) => state.protectedProps;

export const storeWithProtectedActionsSelectorProp = (state: RootState) =>
    storeWithProtectedActionsSelector(state).prop;

export const storeWithProtectedActionsSelectorProp1 = (state: RootState) =>
    storeWithProtectedActionsSelector(state).prop1;
