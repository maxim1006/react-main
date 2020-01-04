https://react-redux.js.org/next/api/hooks

## useState
allow a functional component to use component-level state. Если инит знаечение не простой объект, то чтобы не пересоздавать его на каждый ререндер передаю в useState
вместо 
const [rows, setRows] = useState(createRows(props.count));
делаю
const [rows, setRows] = useState(() => createRows(props.count));



## useEffect
allow a functional component to use lifecycle methods



## useContext
allow a functional component to use the context system



## useRef
allow a functional component to use the ref system



## useCallback
https://reactjs.org/docs/hooks-reference.html#usecallback
It takes as an argument a function and returns a cached/memoized version of it
Each function declared within a functional component’s scope must be memoized/cached with useCallback. If it references functions or other variables from the component scope it should list them in its dependency list.



## useMemo
https://reactjs.org/docs/hooks-reference.html#usememo
useMemo - invokes the provided function and caches its result.



## useEffect
вызывается на каждый рендер компоненты
useEffect(() => {
        getHooks(resource)
    });

вызывется 1 раз
useEffect(() => {
        getHooks(resource)
    }, []);

вызывется каждый раз когда поменяется newElement (новый инстанс объекта, новое число и тд), либо изменится их количество,
useEffect(() => {
        getHooks(resource)
    }, [newElement, newElement1]);

Также в useEffect интересно, что если вызывается этот эффект каждый раз дергается функция очистки в нем (в случае если не передан второй аргумент), что удобно, см пример в useClickOutside







## Redux hooks
### useSelector
на 1 селектор 1 конст

### useDispatch
useDispatch - диспатчу экшн
 

