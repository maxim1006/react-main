import {SHOP_DATA_TYPES} from "../actions/types";

const initialState = null;

export default (state = initialState, action) => {
    switch (action.type) {
        case SHOP_DATA_TYPES.SET_DATA: {
            return {
                ...state,
                ...action.payload
            }
        }

        default: {
            return state;
        }
    }
}
