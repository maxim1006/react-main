import React, {memo, useState} from "react";
import HooksList from "../list/HooksList";
import HooksListPosts from "../list/HooksListPosts";

export default memo(() => {
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

});
