https://react-redux.js.org/next/api/hooks

## General
Если хочу использовать хук с условием то делаю это всегда внутри хука
useEffect(function persistForm() {
    if (name !== '') {
        localStorage.setItem('formData', name);
    }
});



## useState
Ровно как this.setState у Class компоненты
allow a functional component to use component-level state. Если инит знаечение не простой объект, то чтобы не пересоздавать его на каждый ререндер передаю в useState
вместо 
const [rows, setRows] = useState(createRows(props.count));
делаю
const [rows, setRows] = useState(() => createRows(props.count));
setRows тут типо как this.setState(rows: props.count)

const [resource, setResource] = useState('posts');
имена в хуках любые. Первое значение - кусок стейта, второе - setter function (типо setState в class based component)
resource === this.state.resource, setResource === this.setState({resource: "posts"}) 



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

Также в useEffect интересно, что если вызывается этот эффект каждый раз дергается функция очистки в нем (в случае если второй аргумент не массив со значениями), что удобно, см пример в useClickOutside, можно использовать для очистки 

useEffect(() => {
        return () => {
            console.log("triggered when component is destroyed");
        }
    }, []);



## useContext
allow a functional component to use the context system



## useRef
allow a functional component to use the ref system



## useCallback
https://reactjs.org/docs/hooks-reference.html#usecallback
It takes as an argument a function and returns a cached/memoized version of it
Each function declared within a functional component’s scope must be memoized/cached with useCallback. If it references functions or other variables from the component scope it should list them in its dependency list.
Использую чтобы мемоизироывать функцию которую прокидываю в чайлдовый компонент, чтобы каждый раз когда перерендеривается родитель ссылка на функцию не менялась и чайлд не перерендеривался
example: 
const Parent = ()=> {
   const [a, setA] = useState(null);
   const eventHandler = useCallback(()=> {
      // A unique function instance is passed in to useCallback on every render, but
      // eventHandler will be set to the first instance of this function
      // (i.e. potentially an instance of the function that was passed to useCallback
      // on a previous rendering) that was passed to useCallback
      // for the current value of 'a'.
      doSomethingWithA(a);
   }, [a]);
   return <Child onClick={eventHandler}/>



## useMemo
https://reactjs.org/docs/hooks-reference.html#usememo
useMemo - invokes the provided function and caches its result.





## Redux hooks
### useSelector
на 1 селектор 1 конст

### useDispatch
useDispatch - диспатчу экшн
 

