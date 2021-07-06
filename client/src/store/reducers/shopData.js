import { SHOP_DATA_TYPES } from '../actions/types';

const initialState = {
    data: null,
    isLoading: false,
    errorMessage: undefined,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case SHOP_DATA_TYPES.SET_DATA:
        case SHOP_DATA_TYPES.FETCH_DATA_THUNK_SUCCESS: {
            return {
                ...state,
                data: action.payload,
                isLoading: false,
                errorMessage: undefined,
            };
        }

        case SHOP_DATA_TYPES.FETCH_DATA_THUNK_START: {
            return {
                ...state,
                isLoading: true,
                errorMessage: undefined,
            };
        }

        case SHOP_DATA_TYPES.FETCH_DATA_THUNK_ERROR: {
            return {
                ...state,
                isLoading: false,
                errorMessage: action.payload,
            };
        }

        default: {
            return state;
        }
    }
};
