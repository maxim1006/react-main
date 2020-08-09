import { SAGA_TYPES } from "./types";

export const sagaGetUserStartAction = payload => ({
    type: SAGA_TYPES.GET_USER_START,
    payload
});
