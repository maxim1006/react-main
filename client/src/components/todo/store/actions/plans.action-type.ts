import { PLANS_TYPES } from "./types";
import { IPlans } from "../../../../models/plans.model";
import { IError } from "../../../../models/error.model";

interface FetchPlans {
    type: typeof PLANS_TYPES.FETCH_START;
    // тут поставил any иначе ругается редьюсер с payload
    payload: any;
}

interface FetchPlansSuccess {
    type: typeof PLANS_TYPES.FETCH_SUCCESS;
    payload: {
        plans: IPlans;
    };
}

interface FetchPlansError {
    type: typeof PLANS_TYPES.FETCH_ERROR;
    payload: IError;
}

export type PlansActionTypes = FetchPlans | FetchPlansSuccess | FetchPlansError;
