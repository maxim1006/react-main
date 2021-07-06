import { createSelector } from 'reselect';

const selectShopCart = state => state.shopCart;

export const selectShopCartItems = createSelector(
    // прямо как в ngrx, первый аргумент - предыдущие стейты, второй собственно сам селектор
    [selectShopCart],
    shopCart => shopCart.cartItems,
);

export const selectShopCartQuantity = createSelector([selectShopCartItems], cartItems =>
    Object.values(cartItems).reduce((acc, { quantity }) => acc + quantity, 0),
);

export const selectShopCartVisibleDropdown = createSelector([selectShopCart], shopCart => shopCart.visibleDropdown);

export const selectShopCartTotal = createSelector([selectShopCartItems], cartItems =>
    Object.values(cartItems).reduce((acc, { quantity, price }) => acc + quantity * price, 0),
);
