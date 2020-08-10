import { all } from "redux-saga/effects";
import userSaga from "./user";
import getFamilyStartSaga from "./family";

export default function* rootSaga() {
    yield all([userSaga(), getFamilyStartSaga()]);
}
