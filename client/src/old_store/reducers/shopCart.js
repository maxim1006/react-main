import { SHOP_CART_TYPES } from '../actions/types';

const initialState = {
    visibleDropdown: null,
    cartItems: {},
};

export default function shopCartReducer(state = initialState, action) {
    switch (action.type) {
        case SHOP_CART_TYPES.TOGGLE_DROPDOWN: {
            return {
                ...state,
                visibleDropdown: !state.visibleDropdown,
            };
        }

        case SHOP_CART_TYPES.CLOSE_DROPDOWN: {
            return {
                ...state,
                visibleDropdown: false,
            };
        }

        case SHOP_CART_TYPES.ADD_ITEM: {
            const currentItems = state.cartItems;
            const newItem = action.payload;

            let currentItem = currentItems[newItem.id];

            if (currentItem) {
                currentItem.quantity += 1;
                currentItem = { ...currentItem };
            } else {
                currentItems[newItem.id] = {
                    ...newItem,
                    quantity: 1,
                };
            }

            return {
                ...state,
                cartItems: { ...currentItems },
            };
        }

        case SHOP_CART_TYPES.REMOVE_ITEMS: {
            const { [action.payload.id]: removed, ...restItems } = state.cartItems;

            return {
                ...state,
                cartItems: { ...restItems },
            };
        }

        case SHOP_CART_TYPES.REMOVE_ITEM: {
            let currentCartItems = state.cartItems;
            const currentCartItem = currentCartItems[action.payload.id];

            currentCartItem.quantity -= 1;

            if (currentCartItem.quantity <= 0) {
                const { [action.payload.id]: removed, ...rest } = currentCartItems;
                currentCartItems = rest;
            } else {
                currentCartItems[action.payload.id] = { ...currentCartItem };
            }

            return {
                ...state,
                cartItems: { ...currentCartItems },
            };
        }

        case SHOP_CART_TYPES.CLEAR_ITEMS: {
            return {
                visibleDropdown: null,
                cartItems: {},
            };
        }

        default:
            return state;
    }
}
