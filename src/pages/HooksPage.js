import React, {memo} from "react";
import Component from "../components/component/Component";
import MemoHooks from "../components/hooks/memo/MemoHooks";

export default memo(() => {
    return (
        <>
            <Component title="memo">
                <MemoHooks/>
            </Component>

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

