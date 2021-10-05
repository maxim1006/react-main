import { COUNTER_TYPES } from '../actions/types';

const initState = 0;

export default function counterReducer(state = initState, action) {
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
