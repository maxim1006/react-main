import { createSelector } from "reselect";

const selectShopUser = state => state.shopUser;

export const selectShopCurrentUser = createSelector(
    [selectShopUser],
    shopuser => shopuser.currentUser
);
