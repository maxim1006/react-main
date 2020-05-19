import {
    CREATE_STREAM,
    DELETE_STREAM,
    EDIT_STREAM,
    FETCH_STREAM,
    FETCH_STREAMS
} from "../actions/types";

export default (state = {}, action) => {
    switch (action.type) {
        case CREATE_STREAM:
        case EDIT_STREAM:
        case FETCH_STREAM: {
            if (action.payload.id) {
                return { ...state, [action.payload.id]: action.payload };
            }

            return state;
        }

        case FETCH_STREAMS: {
            return { ...state, ...action.payload };
        }

        case DELETE_STREAM: {
            const { [action.payload.id]: removed, ...newState } = state;
            return { ...newState };
        }

        default: {
            return state;
        }
    }
};
