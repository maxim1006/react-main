import {SHOP_CART_TYPES} from "../actions/types";

const initialState = {
    visibleDropdown: null,
    cartItems: {}
};

export default (state = initialState, action) => {
    switch (action.type) {
        case SHOP_CART_TYPES.TOGGLE_DROPDOWN: {
            return {
                ...state,
                visibleDropdown: !state.visibleDropdown
            }
        }

        case SHOP_CART_TYPES.ADD_ITEM: {
            const currentItems = initialState.cartItems;
            const newItem = action.payload;

            let currentItem = currentItems[newItem.id];

            if (currentItem) {
                currentItem.quantity += 1;
                currentItem = {...currentItem};
            } else {
                currentItems[newItem.id] = {
                    ...newItem,
                    quantity: 1
                };
            }

            return {
                ...state,
                cartItems: {...currentItems}
            }
        }

        default:
            return state;

    }
}
