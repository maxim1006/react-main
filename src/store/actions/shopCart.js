import {SHOP_CART_TYPES} from "./types";

export const shopToggleDropdown = () => ({
    type: SHOP_CART_TYPES.TOGGLE_DROPDOWN
});

export const shopAddCartItem = (item) => ({
    type: SHOP_CART_TYPES.ADD_ITEM,
    payload: item
});

export const shopRemoveCartItem = (item) => ({
    type: SHOP_CART_TYPES.ADD_ITEM,
    payload: item
});

