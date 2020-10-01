import React, { memo } from 'react';
import Component from '../components/component/Component';
import HooksUseStateFamily from '../components/hooks/use-state/HooksUseStateFamily';
import HooksUseStateCounter from '../components/hooks/use-state/HooksUseStateCounter';
import UseLayoutEffectComponent from '../components/hooks/use-layout-effect/use-layout-effect.component';
import UseMemoHook from '../components/hooks/use-memo/UseMemoHook';

const HooksPage = () => {
    return (
        <>
            {/*<Component title="UseLayoutEffectComponent">*/}
            {/*    <UseLayoutEffectComponent />*/}
            {/*</Component>*/}

            <Component title="UseMemoHook">
                <UseMemoHook />
            </Component>

            {/* <Component title="UseReducerHook">*/}
            {/*    <UseReducerHook/>*/}
            {/* </Component>*/}

            {/* <Component title="UseRefHook">*/}
            {/*    <UseRefHook/>*/}
            {/* </Component>*/}

            {/* <Component title="memo">*/}
            {/*    <MemoHooks/>*/}
            {/* </Component>*/}

            {/* <Component title="useCallback">*/}
            {/*    <UseCallbackHooks/>*/}
            {/* </Component>*/}

            {/* <Component title="useEffect">*/}
            {/*    <HooksUseEffectFamily/>*/}
            {/* </Component>*/}

            <Component title="useState">
                <HooksUseStateFamily />
                <HooksUseStateCounter />
            </Component>

            {/* <Component title="Posts and Todos">*/}
            {/*    <HooksPostsAndTodos/>*/}
            {/* </Component>*/}
        </>
    );
};

export default memo(HooksPage);
