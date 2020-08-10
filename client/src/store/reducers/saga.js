import { SAGA_TYPES } from "../actions/types";

const initState = {
    loading: false,
    entities: {
        users: []
    }
};

export default (state = initState, action) => {
    switch (action.type) {
        case SAGA_TYPES.GET_USER_START: {
            return {
                ...state,
                loading: true
            };
        }

        case SAGA_TYPES.GET_USER_SUCCESS: {
            const users = action.payload;

            return {
                ...state,
                loading: false,
                entities: { ...state.entities, users }
            };
        }

        case SAGA_TYPES.GET_USER_ERROR: {
            return {
                ...state,
                loading: false
            };
        }

        default:
            return state;
    }
};
