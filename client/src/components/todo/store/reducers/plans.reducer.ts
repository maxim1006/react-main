import { PLANS_TYPES } from "../actions";
import { PlansState } from "../state";
import { PlansActionTypes } from "../actions/plans.action-type";
import { IPlans } from "../../../../models/plans.model";
import { IError } from "../../../../models/error.model";

const initState: PlansState = {
    isLoading: false,
    error: {
        message: ""
    },
    plans: {}
};

export default (state = initState, action: PlansActionTypes): PlansState => {
    switch (action.type) {
        case PLANS_TYPES.FETCH_START: {
            return { ...state, isLoading: true };
        }

        case PLANS_TYPES.FETCH_SUCCESS: {
            const { plans }: IPlans = action.payload;
            return { ...state, plans, isLoading: false };
        }

        case PLANS_TYPES.FETCH_ERROR: {
            const { error }: IError = action.payload;
            return { ...state, error, isLoading: false };
        }

        default:
            return state;
    }
};
