import { VISIBILITY_FILTER_TYPES } from "../actions";

const initState = "All";

export default (
    state = initState,
    action: { type: string; payload: string }
) => {
    switch (action.type) {
        case VISIBILITY_FILTER_TYPES.SET: {
            return action.payload;
        }

        default:
            return state;
    }
};
