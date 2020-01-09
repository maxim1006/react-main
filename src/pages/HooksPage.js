import React, {memo} from "react";
import Component from "../components/component/Component";
import HooksPostsAndTodos from "../components/hooks/posts-and-todos/HooksPostsAndTodos";
import HooksUseStateCounter from "../components/hooks/use-state/HooksUseStateCounter";
import HooksUseStateFamily from "../components/hooks/use-state/HooksUseStateFamily";
import HooksUseEffectFamily from "../components/hooks/use-effect/HooksUseEffectFamily";

export default memo(() => {
    return (
        <>
            <Component title="useEffect">
                <HooksUseEffectFamily/>
            </Component>

            <Component title="useState">
                <HooksUseStateFamily/>
                <HooksUseStateCounter/>
            </Component>

            <Component title="Posts and Todos">
                <HooksPostsAndTodos/>
            </Component>
        </>
    );
});

