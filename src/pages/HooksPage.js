import React, {useState} from "react";
import HooksList from "../components/hooks/HooksList";
import HooksListPosts from "../components/hooks/HooksListPosts";

export default () => {
    // имена в хуках любые. Первое значение - кусок стейта, второе - setter function (типо setState в class based component)
    // resource === this.state.resource, setResource === this.setState({resource: "posts"}) // расшифровка хуков
    // useState('posts') - задаю инит свойство
    const [resource, setResource] = useState('posts');

    return (
        <div className="hooks-page">
            <h3>"Hello Hooks Page!"</h3>

            <div className="hooks-page__controls">
                <button type="button" onClick={() => setResource("posts")}>Posts</button>
                <button type="button" onClick={() => setResource("todos")}>Todos</button>
            </div>

            <div className="hooks-page__list">
                <HooksList resource={resource}/>
                {/*чисто для примера переиспользования*/}
                <HooksListPosts/>
                {/*Пример как с хуком но с классом*/}
                {/*<HooksListClass resource={resource} />*/}
            </div>
        </div>
    );
};

/*

useState - allow a functional component to use component-level state

useEffect - allow a functional component to use lifecycle methods

useContext - allow a functional component to use the context system

useRef - allow a functional component to use the ref system

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
