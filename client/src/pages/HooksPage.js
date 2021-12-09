import React, { memo } from 'react';
import Component from '../components/component/Component';
import HooksUseStateFamily from '../components/hooks/use-state/HooksUseStateFamily';
import HooksUseStateCounter from '../components/hooks/use-state/HooksUseStateCounter';
import { ExampleProvider } from '../components/hooks/use-context/example.context';
import UseContextContainer from '../components/hooks/use-context/use-context.container';

const HooksPage = () => {
    return (
        <>
            <Component title='UseLayoutEffectComponent'>
                <ExampleProvider initData={{ number: 1 }}>
                    <UseContextContainer />
                </ExampleProvider>
            </Component>
            {/* <Component title="UseLayoutEffectComponent"> */}
            {/*    <UseLayoutEffectComponent /> */}
            {/* </Component> */}
            {/* <Component title="UseMemoHook"> */}
            {/* <UseMemoHook /> */}
            {/* </Component> */}
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
            <Component title='useState'>
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
