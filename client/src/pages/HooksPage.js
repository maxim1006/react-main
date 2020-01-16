import React, {memo} from "react";
import Component from "../components/component/Component";
import UseReducerHook from "../components/hooks/use-reducer/UseReducerHook";

export default memo(() => {
    return (
        <>
            <Component title="ref">
                <UseReducerHook/>
            </Component>

            {/*<Component title="ref">*/}
            {/*    <UseRefHook/>*/}
            {/*</Component>*/}

            {/*<Component title="memo">*/}
            {/*    <MemoHooks/>*/}
            {/*</Component>*/}

            {/*<Component title="useCallback">*/}
            {/*    <UseCallbackHooks/>*/}
            {/*</Component>*/}

            {/*<Component title="useEffect">*/}
            {/*    <HooksUseEffectFamily/>*/}
            {/*</Component>*/}

            {/*<Component title="useState">*/}
            {/*    <HooksUseStateFamily/>*/}
            {/*    <HooksUseStateCounter/>*/}
            {/*</Component>*/}

            {/*<Component title="Posts and Todos">*/}
            {/*    <HooksPostsAndTodos/>*/}
            {/*</Component>*/}
        </>
    );
});

