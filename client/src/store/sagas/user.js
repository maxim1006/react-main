import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import { SAGA_TYPES } from "../actions/types";

// worker Saga: will be fired on sagaGetUserStartAction actions
function* getUser(action) {
    try {
        const user = call(getUserApi, action.payload.id);

        yield put({
            type: SAGA_TYPES.GET_USER_SUCCESS,
            user
        });
    } catch (e) {
        yield put({ type: SAGA_TYPES.GET_USER_ERROR, message: e.message });
    }
}
