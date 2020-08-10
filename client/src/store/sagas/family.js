import { FAMILY_TYPES } from "../actions/types";
import { takeEvery, call, put } from "redux-saga/effects";
import { getFamilyApi } from "./api/family";
import { getFamilyErrorAction, getFamilySuccessAction } from "../actions";

function* getFamily(action) {
    try {
        const family = yield call(getFamilyApi);

        // этот yields будут вызываны только после того как отработает call(getFamilyApi)
        // yield console.log("after get request");

        yield put(getFamilySuccessAction(family));
    } catch (e) {
        yield put(getFamilyErrorAction(e));
    }
}

function* getFamilyStartSaga() {
    yield takeEvery(FAMILY_TYPES.GET_FAMILY_START, getFamily);
}

export default getFamilyStartSaga;
