import { createSelector } from "reselect";

export const selectAuth = state => state.auth;

export const selectAuthIsSignedIn = createSelector(
    [selectAuth],
    selectAuth => selectAuth.isSignedIn
);

export const selectAuthUserId = createSelector(
    [selectAuth],
    selectAuth => selectAuth.userId
);
