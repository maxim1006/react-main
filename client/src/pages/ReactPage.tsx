import React from 'react';
import { FormsComponent } from '../components/forms/Forms';
import { JsxListComponent } from '../components/jsx/JsxList';
import JsxFragment from '../components/jsx/JsxFragment';
import JSXExampleComponent from '../components/jsx/JsxExamples';
import { TabsComponent } from '../components/tabs/Tabs';
import ReduxForm from '../components/forms/ReduxForm';
import Component from '../components/component/Component';
import ThrottleDebounce from '@app/components/throttle-debounce/throttle-debounce.component';

export default function ReactPage() {
    return (
        <TabsComponent>
            <div tabName='React'>
                <Component title='ThrottleDebounce'>
                    <ThrottleDebounce />
                </Component>

                {/*<Component title='ForwradRefUseImperativeHandle'>*/}
                {/*    <MyIframe />*/}
                {/*</Component>*/}

                {/*<Component title='ForwradRefUseImperativeHandle'>*/}
                {/*    <ForwradRefUseImperativeHandle />*/}
                {/*</Component>*/}

                {/*<Component title='TestsReduxContainer'>*/}
                {/*    <TestsReduxContainer />*/}
                {/*</Component>*/}

                {/*<Component title='URLSearchParamsTest'>*/}
                {/*    <UrlSearchParams />*/}
                {/*</Component>*/}

                {/*<Component title='RouterTestsContainer'>*/}
                {/*    <RouterTestContainer />*/}
                {/*</Component>*/}

                {/*<Component title='UsersTest'>*/}
                {/*    <UsersTest />*/}
                {/*</Component>*/}

                {/*<Component title='Css mask'>*/}
                {/*    <MyCssMask />*/}
                {/*</Component>*/}

                {/*<Component title='Aspect ratio'>*/}
                {/*    <MyAspectRatio />*/}
                {/*</Component>*/}

                {/*<Component title='React 18'>*/}
                {/*    <React18Concurrent />*/}
                {/*    <React18Batching />*/}
                {/*</Component>*/}

                {/*<Component title='AnimateAndTransition'>*/}
                {/*    <AnimateAndTransition />*/}
                {/*</Component>*/}

                {/*<Component title='MatchVsTest'>*/}
                {/*    <MatchVsTest />*/}
                {/*</Component>*/}

                {/*<Component title='Event bus'>*/}
                {/*    <EventBus />*/}
                {/*</Component>*/}

                {/*<Component title='Parallax'>*/}
                {/*    <Parallax />*/}
                {/*</Component>*/}

                {/*<Component title='Use memo'>*/}
                {/*    <UseMemoHook />*/}
                {/*</Component>*/}

                {/*<Component title='Use state'>*/}
                {/*    <UseState />*/}
                {/*</Component>*/}

                {/*<Component title='Use updatable state'>*/}
                {/*    <UseUpdatableState />*/}
                {/*</Component>*/}

                <Component title='Hooks'>
                    {/*<WindowSizeHook />*/}
                    {/*<OnScreenHook />*/}
                    {/*<EventListenerHook />*/}
                    {/*<ScriptHook />*/}
                    {/*<PreviousHook />*/}
                    {/*<UpdateEffectHook />*/}
                    {/*<StorageHook />*/}
                </Component>

                {/* <Component title="Image preload"> */}
                {/*    <ImagePreload />*/}
                {/* </Component> */}

                {/* <Component title="ProTabs"> */}
                {/*    <ProTabs /> */}
                {/* </Component> */}

                {/* <Component title="ResizeOverflow"> */}
                {/*    <ResizeOverflow /> */}
                {/* </Component> */}

                {/* <Component title="CloneElement"> */}
                {/*    <CloneElementContainer /> */}
                {/* </Component> */}

                {/* <Component title="SessionStorage"> */}
                {/*    <SessionStorageParent />*/}
                {/* </Component> */}

                {/*<Component title='PictureImageSet'>*/}
                {/*    <PictureImageSet />*/}
                {/*</Component>*/}

                {/* <Component title="Lazy"> */}
                {/*    <Lazy />*/}
                {/* </Component> */}

                {/* <Component title="ExamplesComponent">*/}
                {/*    <ClassNames />*/}
                {/* </Component>*/}

                {/* <Component title="ExamplesComponent">*/}
                {/*    <VminGrid />*/}
                {/* </Component>*/}

                {/* <Component title="ExamplesComponent">*/}
                {/*    <ExamplesComponent />*/}
                {/* </Component>*/}

                {/* <Component title="BroadcastComponent">*/}
                {/*    <BroadcastComponent />*/}
                {/* </Component>*/}

                {/* <Component title="Performance"> */}
                {/*    <UploadComponent />*/}
                {/* </Component> */}

                {/* <Component title="Performance"> */}
                {/*    <Performance />*/}
                {/* </Component> */}

                {/* <Component title="JS tips"> */}
                {/*  <TipsComponent />*/}
                {/* </Component> */}

                {/* <Component title="Hook axios get on callback"> */}
                {/*    <GetRequestHookOnCbComponent />*/}
                {/* </Component> */}

                {/* <Component title="CSS Modules"> */}
                {/*    <CssModuleComponent />*/}
                {/* </Component> */}

                {/* <Component title="Mouseover mouseleave"> */}
                {/*    <MouseoverMouseleave />*/}
                {/* </Component> */}

                {/* <Component title="Scroll snap align">*/}
                {/*    <ScrollSnapAlign />*/}
                {/* </Component>*/}

                {/* <Component title="Drag'n'drop">*/}
                {/*    <DragNDrop />*/}
                {/* </Component>*/}

                {/* <Component title="Count up">*/}
                {/*    <CountupWrapper />*/}
                {/* </Component>*/}

                {/* <Component title="Error boundary">*/}
                {/*    <ErrorBoundary>*/}
                {/*        <ErrorBoundaryError/>*/}
                {/*    </ErrorBoundary>*/}
                {/* </Component>*/}

                {/* <Component title="Error boundary">*/}
                {/*    <ErrorBoundary>*/}
                {/*        <ErrorBoundaryError/>*/}
                {/*    </ErrorBoundary>*/}
                {/* </Component>*/}

                {/* <Component title="Dropdown Menu">*/}
                {/*    <NavBar/>*/}
                {/* </Component>*/}

                {/* <Component title="Insert HTML">*/}
                {/*    <DangerouslySetInnerHTML/>*/}
                {/* </Component>*/}

                {/* <Component title="Array">*/}
                {/*    <ArrayComponent/>*/}
                {/* </Component>*/}

                {/* <Component title="Fetch">*/}
                {/*    <Fetch />*/}
                {/* </Component>*/}

                {/* <Component title="Skills">*/}
                {/*    <Skills/>*/}
                {/* </Component>*/}

                {/*<Component title='Family fetch'>*/}
                {/*    <AxiosFamily />*/}
                {/*    /!* <FamilyFetch />*!/*/}
                {/*</Component>*/}

                {/* <Component title="Container example">*/}
                {/*    <ContainerClass/>*/}
                {/* </Component>*/}

                {/* <Component title="HOC">*/}
                {/*    <HOCClass/>*/}
                {/*    <HOCHooks/>*/}
                {/* </Component>*/}

                {/* <Component title="Ref examples">*/}
                {/*    <RefHooks/>*/}
                {/*    <RefClass/>*/}
                {/* </Component>*/}

                {/* <Component title="Styled Components">*/}
                {/*    <StyledText isActive>Styled text</StyledText>*/}
                {/* </Component>*/}

                {/* <Component title="Firestore Family">*/}
                {/*    <FirestoreFamily/>*/}
                {/* </Component>*/}

                {/* <Component title="Firestore">*/}
                {/*    <FireStore/>*/}
                {/* </Component>*/}

                {/*<Component title="AsyncSetState">*/}
                {/*   <AsyncSetState increaseNumber={1}/>*/}
                {/*   <AsyncSetStateHooks increaseNumber={1}/>*/}
                {/*</Component>*/}

                {/* <Component title="Monsters">*/}
                {/*    <Monsters/>*/}
                {/* </Component>*/}

                {/* <Component title="Imports">*/}
                {/*    <Imports/>*/}
                {/* </Component>*/}

                {/* <Component title="Grid"> */}
                {/*    <Grid />*/}
                {/* </Component> */}

                {/* <Component title="RestApiComponent">*/}
                {/*    <RestApiComponent/>*/}
                {/* </Component>*/}

                {/* <Component title="LifecycleHooksComponent">*/}
                {/*    <LifecycleHooksComponent/>*/}
                {/* </Component>*/}

                {/* <Component title="ClassBasedComponent">*/}
                {/*    <ClassBasedComponent/>*/}
                {/* </Component>*/}

                {/* <Component title="CommentListComponent">*/}
                {/*    <CommentListComponent/>*/}
                {/* </Component>*/}

                {/* <Component title="CommentListHooks">*/}
                {/*    <CommentListHooks/>*/}
                {/* </Component>*/}

                {/* <Component title="ClassBasedHooks">*/}
                {/*    <ClassBasedHooks/>*/}
                {/* </Component>*/}
            </div>
            <div tabName='Redux Forms'>
                <ReduxForm />
            </div>
            <div tabName='Forms'>
                <FormsComponent />
            </div>
            <div tabName='JSX'>
                <JsxListComponent />
                <JsxFragment prop1='prop1' prop2='prop2' />
                <JSXExampleComponent />
            </div>
        </TabsComponent>
    );
}
