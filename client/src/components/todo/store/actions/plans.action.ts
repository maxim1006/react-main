import { PLANS_TYPES } from "./types";
import customAxios from "../../../../common/api/axios";

export const fetchTodoPlans = (cancelToken: any) => async (dispatch: any) => {
    dispatch({
        type: PLANS_TYPES.FETCH_START
    });

    try {
        const { data: plans } = await customAxios.get("/plans", {
            cancelToken
        });

        dispatch({
            type: PLANS_TYPES.FETCH_SUCCESS,
            payload: {
                plans
            }
        });
    } catch ({ message }) {
        dispatch({
            type: PLANS_TYPES.FETCH_ERROR,
            payload: {
                error: message
            }
        });
    }
};
