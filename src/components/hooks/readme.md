https://react-redux.js.org/next/api/hooks

/*

useState - allow a functional component to use component-level state

useEffect - allow a functional component to use lifecycle methods

useContext - allow a functional component to use the context system

useRef - allow a functional component to use the ref system

https://reactjs.org/docs/hooks-reference.html#usecallback
useCallback - It takes as an argument a function and returns a cached/memoized version of it
Each function declared within a functional component’s scope must be memoized/cached with useCallback. If it references functions or other variables from the component scope it should list them in its dependency list.

https://reactjs.org/docs/hooks-reference.html#usememo
useMemo - invokes the provided function and caches its result.


// из редакс хуков
useSelector - на 1 селектор 1 конст
useDispatch - диспатчу экшн


 */

/*
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


 */
