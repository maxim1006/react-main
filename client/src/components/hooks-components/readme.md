https://react-redux.js.org/next/api/hooks

## `Rules`

-   Only call Hooks at the top level. Don’t call Hooks inside loops, conditions, or nested functions.
-   Only call Hooks from React function components. Don’t call Hooks from regular JavaScript functions.

## `General`

Если хочу использовать хук с условием то делаю это всегда внутри хука
useEffect(function persistForm() {
if (name !== '') {
localStorage.setItem('formData', name);
}
});

## `useState`

Ровно как this.setState у Class компоненты
allow a functional component to use component-level state. Если инит знаечение не простой объект, то чтобы не пересоздавать его на каждый ререндер передаю в useState
вместо
const [rows, setRows] = useState(createRows(props.count));
делаю
const [rows, setRows] = useState(() => createRows(props.count));
setRows тут типо как this.setState({rows: props.count})

const [resource, setResource] = useState('posts');
имена в хуках любые. Первое значение - кусок стейта, второе - setter function (типо setState в class based component)
resource === this.state.resource, setResource === this.setState({resource: "posts"})

Стейт сохраняется в течение жизни компоненты. Каждое изменение стейта триггерит перезапуск функции компонента.

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

Также в массиве изменяемые значения должны обязательно меняться через ререндер компоненты (т.е. если изменились проперти или применился setState())

Также в useEffect интересно, что если вызывается этот эффект каждый раз дергается функция очистки в нем (в случае если второй аргумент не массив со значениями), что удобно, см пример в useClickOutside, можно использовать для очистки. Также функция очистки дернется при удалении компонента

useEffect(() => {
return () => {
console.log("triggered when component is destroyed");
}
}, []);

## useContext

allow a functional component to use the context system

## useRef

allow a functional component to use the ref system

useRef returns a mutable ref object whose .current property is initialized to the passed argument (initialValue). The returned object will persist for the full lifetime of the component.

Удобно использовать для хранения и записи через все рендеры,

const a = useRef();

дальше где-то a.current = {}

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

При изменении в array сама функция обернутая в useCallback вызываться не будет

Если функция зависимость, то ее надо оборачивать в useCallback, чтобы не попасть в бесконечный цикл если обновляется стейт в этой компоненте, а функция будет обновляться и будет каждый раз ререндерить

## useMemo

https://reactjs.org/docs/hooks-reference.html#usememo
useMemo - invokes the provided function and caches its result.
// useMemo - кеширую сложные вычисления, функция expensiveFunc вызовется только 1 раз при инициализации. Дальше при
// изменении стейта будет вызываться функция без useMemo, а мемоизировванная не будет
Возвращает результат кеширования, используется для мемоизации сложных функций, во-вторых используется для кеширования объектов, чтобы использовать кешированные объекты при следующем ререндере

# useLayoutEffect

The signature is identical to useEffect, but it fires synchronously after all DOM mutations. Use this to read layout from the DOM and synchronously re-render. Updates scheduled inside useLayoutEffect will be flushed synchronously, before the browser has a chance to paint.

Prefer the standard useEffect when possible to avoid blocking visual updates.

Only after the browser has painted the DOM change(s) is the useEffect function fired.
Unlike useEffect, the function passed to the useLayoutEffect Hook is fired synchronously after all DOM mutations.

# useImperativeHandle https://reactjs.org/docs/hooks-reference.html#useimperativehandle

## Redux hooks

### useSelector
https://react-redux.js.org/api/hooks#useselector
useSelector не мемоизирует сам селектор-функцию, он мемоизирует только результат её выполнения и сравнивает его с предыдущим.
поэтому можно писать useSelector((state) => shortsItemByIdSelector(state, videoId))
 
useSelector требует возвращать одно и тоже значение из функции переданной в useSelector((state) => selector(state, videoId)), функция selector будет вызываться !всегда! и возвращать значение, поэтому стоит использовать createSelector, чтобы не вызывать ее лишний раз, а закешировать на основании входных пропертей. Весь цимес именно в лишнем вызове функции селектора, если она не обернута в createSelector

Вот эта дурость из доков вводит в заблуждение:
The selector will be run whenever the function component renders (unless its reference hasn't changed since a previous render of the component so that a cached result can be returned by the hook without re-running the selector).
❌ Нет, useSelector не пропускает выполнение селектора, даже если ссылка на функцию та же.
✅ Он всегда выполняет селектор, но не перерисовывает компонент, если результат не изменился.

### useDispatch

useDispatch - диспатчу экшн
