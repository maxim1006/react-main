import {ABRAMOV_COUNTER_TYPES} from "../actions/types";

const initState = 0;

export default (state = initState, action) => {
    switch (action.type) {
        case ABRAMOV_COUNTER_TYPES.INCREASE: {
            return ++state;
        }

        default:
            return state;
    }
}
