import { take, takeEvery, delay, put, takeLatest, all, call } from "redux-saga/effects";
import { SAGA_TYPES } from "../actions/types";

// take
// export function* incrementSaga() {
//     const incrementPayload = yield take(SAGA_TYPES.INCREMENT_COUNTER);
//     console.log(incrementPayload); // выведется 1 раз с {type: "[SagaCounterComponent] Increment counter"},
//     // остальной код будет ждать выполнения
// }

// takeEvery
// export function* incrementSaga() {
//     const incrementPayload = yield takeEvery(SAGA_TYPES.INCREMENT_COUNTER, () => console.log("takeEvery log"));
//     console.log(incrementPayload); // выведется 1 раз с {type: "[SagaCounterComponent] Increment counter"},
//     // остальной код будет ждать выполнения
// }

// take block
// take блокирует выполнение пока асинхронная функция после него не выполнится
// тогда как takeEvery не блокирует thread а сразу вызывает новый сабтаск
// можно использовать для debounce
// export function* incrementSaga() {
//     while (true) {
//         yield take(SAGA_TYPES.INCREMENT_COUNTER);
//         console.log("takeEvery log");
//         yield delay(3000);
//     }
// }

// takeEvery doesnt block
// function* onIncrement() {
//     yield console.log("onIncrement");
//     yield delay(3000);
//     yield put({ type: SAGA_TYPES.INCREMENT_AFTER_DELAY_COUNTER });
//     console.log("after delay");
// }
// export function* incrementSaga() {
//     yield takeEvery(SAGA_TYPES.INCREMENT_COUNTER, onIncrement);
// }

// takeLatest - закенселит все что после yield delay(3000);
// и вызовет только последний (кликнул много раз но console.log("after delay") сработает только 1 раз)
// при этом синхоронные вызовы типо yield console.log("onIncrement"); будут вызыватья сколько накликал
// function* onIncrement() {
//     yield console.log("onIncrement");
//     yield delay(3000);
//     yield put({ type: SAGA_TYPES.INCREMENT_AFTER_DELAY_COUNTER });
//     console.log("after delay");
// }
// export function* incrementSaga() {
//     yield takeLatest(SAGA_TYPES.INCREMENT_COUNTER, onIncrement);
// }

// all
function* task() {
    yield delay(2000);
    console.log("task after delay");
}

// последовательно
// function* onIncrement() {
//     yield task();
//     yield task();
//     yield task();
// }

// параллельно
function* onIncrement() {
    yield all([task(), task(), task()]);
}

export function* incrementSaga() {
    yield takeLatest(SAGA_TYPES.INCREMENT_COUNTER, onIncrement);
}

export default incrementSaga;
