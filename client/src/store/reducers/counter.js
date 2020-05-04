import {COUNTER_TYPES} from "../actions/types";

const initState = 0;

export default (state = initState, action) => {
    console.log(state);

    switch (action.type) {
        case COUNTER_TYPES.INCREMENT: {
            return ++state;
        }

        case COUNTER_TYPES.DECREMENT: {
            return --state;
        }

        default:
            return state;
    }
}
