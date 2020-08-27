import { FAMILY_TYPES } from '../actions/types';
import { call, cancelled, put, takeLatest } from 'redux-saga/effects';
import { getFamilyApi } from './api/family';
import { getFamilyErrorAction, getFamilySuccessAction } from '../actions';
import customAxios from '../../common/api/axios';

function* getFamily(action) {
    const cancelToken = customAxios.CancelToken.source();

    try {
        const family = yield call(getFamilyApi, { payload: action.payload, cancelToken });

        yield put(getFamilySuccessAction(family));
    } catch (e) {
        yield put(getFamilyErrorAction(e));
    } finally {
        if (yield cancelled()) {
            cancelToken.cancel('Saga getFamily cancelled');
        }
    }
}

function* getFamilyStartSaga() {
    yield takeLatest(FAMILY_TYPES.GET_FAMILY_START, getFamily);
}

export default getFamilyStartSaga;
