import { SAGA_TYPES } from '../actions/types';

const initState = {
    loading: false,
    entities: {
        users: []
    },
    counter: 0
};

export default function sagaReducer(state = initState, action) {
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

        case SAGA_TYPES.INCREMENT_AFTER_DELAY_COUNTER:
        case SAGA_TYPES.INCREMENT_COUNTER: {
            const counter = state.counter + 1;

            return {
                ...state,
                counter
            };
        }

        case SAGA_TYPES.DECREMENT_COUNTER: {
            const counter = state.counter - 1;

            return {
                ...state,
                counter
            };
        }

        default:
            return state;
    }
}
