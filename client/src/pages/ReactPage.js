import React from "react";
import { FormsComponent } from "../components/forms/Forms";
import { JsxListComponent } from "../components/jsx/JsxList";
import JsxFragment from "../components/jsx/JsxFragment";
import JSXExampleComponent from "../components/jsx/JsxExamples";
import { TabsComponent } from "../components/tabs/Tabs";
import ReduxForm from "../components/forms/ReduxForm";
import Component from "../components/component/Component";
import MouseoverMouseleave from "../components/mouseover-mouseleave/mouseover-mouseleave.component";

export default function ReactPage() {
    return (
        <TabsComponent>
            <div tabName="Components">
                <Component title="Mouseover mouseleave">
                    <MouseoverMouseleave />
                </Component>

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
                {/*    <Fetch/>*/}
                {/* </Component>*/}

                {/* <Component title="Skills">*/}
                {/*    <Skills/>*/}
                {/* </Component>*/}

                {/* <Component title="Family fetch">*/}
                {/*    <AxiosFamily/>*/}
                {/*    <FamilyFetch/>*/}
                {/* </Component>*/}

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

                {/* <Component title="AsyncSetState">*/}
                {/*    <AsyncSetState increaseNumber={1}/>*/}
                {/*    <AsyncSetStateHooks increaseNumber={1}/>*/}
                {/* </Component>*/}

                {/* <Component title="Monsters">*/}
                {/*    <Monsters/>*/}
                {/* </Component>*/}

                {/* <Component title="Imports">*/}
                {/*    <Imports/>*/}
                {/* </Component>*/}

                {/* <Component title="Parent">*/}
                {/*    <Parent/>*/}
                {/* </Component>*/}

                {/* <Component title="Grid">*/}
                {/*    <Grid/>*/}
                {/* </Component>*/}

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
            <div tabName="Redux Forms">
                <ReduxForm />
            </div>
            <div tabName="Forms">
                <FormsComponent />
            </div>
            <div tabName="JSX">
                <JsxListComponent />
                <JsxFragment prop1="prop1" prop2="prop2" />
                <JSXExampleComponent />
            </div>
        </TabsComponent>
    );
}
