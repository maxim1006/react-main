import { createSelector } from "reselect";

export const selectUsers = state => state.users;

export const selectIsLoadingUsers = createSelector(
    [selectUsers],
    selectUsers => selectUsers.isLoadingUsers
);

export const selectUsersArray = createSelector([selectUsers], selectUsers =>
    Object.values(selectUsers.users)
);
