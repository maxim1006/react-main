### takeEvery
слушает экшн и на каждый из них вызывает сагу. 
Не блокирует выполнение js. Вызываются сразу все yeild внутри исполняемых генераторов и не блокируется thread.

### call(fn, args)
Creates an Effect description that instructs the middleware to call the function fn with args as arguments.
делает defer fn в саге если fn возвращает прамис
const user = yield call(getUserApi, action.payload);

yield call(
        (...args) => {
            console.log(args); // args === [1,2]
        },
        1,
        2
    );
    
    вызывает функцию с заданными атрибутами
    
const user = yield call(getUserApi, { payload: action.payload, cancelToken });
тоже что и 
const user = yield getUserApi({ payload: action.payload, cancelToken });

    
### put
диспатч экшенов в сагах
 yield put({
            type: SAGA_TYPES.GET_USER_SUCCESS,
            payload: user
        });
        
yield put({ type: SAGA_TYPES.INCREMENT_AFTER_DELAY_COUNTER });

        
        
### take
В отличие от takeEvery без 2го аргумента, после 
yield take(SAGA_TYPES.INCREMENT_COUNTER);
можем забрать payload если нужно

const incrementPayload = yield take(SAGA_TYPES.INCREMENT_COUNTER);

в отличие от takeEvery  take вызовется только 1 раз, а takeEvery будет вызывать коллбек который мы передали каждый раз когда вызываю экшн
take блокирует выполнение пока асинхронная функция после него не выполнится
тогда как takeEvery не блокирует thread а сразу вызывает новый сабтаск

### delay
отложенный вызов 
export function delay<T = true>(ms: number, val?: T): CallEffect<T>

### all
запускает все саги параллельно
