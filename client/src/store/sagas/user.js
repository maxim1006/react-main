import { call, put, takeEvery, select } from "redux-saga/effects";
import { SAGA_TYPES } from "../actions/types";
import { getUserApi } from "./api/user";

// worker Saga: will be fired on sagaGetUserStartAction actions
function* getUser(action) {
    // могу получить стейт
    // const state = yield select();
    // console.log("state after", state);
    try {
        const user = yield call(getUserApi, action.payload);

        // это типо диспатч в сагах
        yield put({
            type: SAGA_TYPES.GET_USER_SUCCESS,
            payload: user
        });
    } catch (e) {
        yield put({ type: SAGA_TYPES.GET_USER_ERROR, message: e.message });
    }
}

/*
  Starts fetchUser on each dispatched `USER_FETCH_REQUESTED` action.
  Allows concurrent fetches of user.
  Это называется watcher saga которая следит за указанным экшеном
*/
function* userSaga() {
    yield takeEvery(SAGA_TYPES.GET_USER_START, getUser);
}

/*
  Alternatively you may use takeLatest.

  Does not allow concurrent fetches of user. If "USER_FETCH_REQUESTED" gets
  dispatched while a fetch is already pending, that pending fetch is cancelled
  and only the latest one will be run.
*/
// function* userSaga() {
//     yield takeLatest(SAGA_TYPES.GET_USER_START, getUser);
// }

export default userSaga;
