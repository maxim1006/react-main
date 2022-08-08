import { all } from 'redux-saga/effects';
import userSaga from './user';
import getFamilyStartSaga from './family';
import counterSaga from './counter';

export default function* rootSaga() {
    yield all([userSaga(), getFamilyStartSaga(), counterSaga()]);
}
