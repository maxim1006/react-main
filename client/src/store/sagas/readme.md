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
    
### put
диспатч экшенов в сагах
 yield put({
            type: SAGA_TYPES.GET_USER_SUCCESS,
            payload: user
        });
