import { PLANS_TYPES } from '../actions';
import { PlansState } from '../state';
import { PlansActionTypes } from '../actions/plans.action-type';

const initState: PlansState = {
    isLoading: false,
    error: {
        message: '',
    },
    plans: {},
};

export default function plansReducer(state = initState, action: PlansActionTypes): PlansState {
    switch (action.type) {
        case PLANS_TYPES.FETCH_START: {
            return { ...state, isLoading: true };
        }

        case PLANS_TYPES.FETCH_SUCCESS: {
            const { plans } = action.payload;
            return { ...state, plans, isLoading: false };
        }

        case PLANS_TYPES.FETCH_ERROR: {
            const { error } = action.payload;
            return { ...state, error, isLoading: false };
        }

        default:
            return state;
    }
}
