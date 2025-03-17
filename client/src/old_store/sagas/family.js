import { FAMILY_TYPES } from '../actions/types';
import { call, cancelled, put, takeLatest, takeEvery, takeLeading, take } from 'redux-saga/effects';
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
    // take вызовется только 1 раз и только после него вызовется консоль лог
    // const res = yield take(FAMILY_TYPES.GET_FAMILY_START);
    // console.log({ res });
    // пока не выполнится первый второй не запустится, последовательно вызовет запросы
    // yield takeLeading(FAMILY_TYPES.GET_FAMILY_START, getFamily);
    // все вызовы параллельно
    // yield takeEvery(FAMILY_TYPES.GET_FAMILY_START, getFamily);
    // закенселит все вызовы кроме последнего
    yield takeLatest(FAMILY_TYPES.GET_FAMILY_START, getFamily);
}

export default getFamilyStartSaga;
