import {SHOP_USER_TYPES} from "../actions/types";

const initialState = {
    currentUser: null
};

export default (state = initialState, action) => {

    switch (action.type) {
        case SHOP_USER_TYPES.SET_CURRENT_USER: {
            return {
                ...state,
                currentUser: action.payload
            }
        }

        default:
            return state;

    }

}
