import {CREATE_STREAM, DELETE_STREAM, EDIT_STREAM, FETCH_STREAM, FETCH_STREAMS} from "../actions/types";

export default (state = {}, action) => {
    switch (action.type) {
        case CREATE_STREAM:
        case EDIT_STREAM:
        case FETCH_STREAM: {
            return {...state, [action.payload.id]: action.payload};
        }

        case FETCH_STREAMS: {
            return {...action.payload};
        }

        case DELETE_STREAM: {
            const {[action.payload.id]: removed, ...newState} = state;
            return {...newState};
        }

        default: {
            return state;
        }
    }
};
