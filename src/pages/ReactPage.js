import React from 'react';
import {FormsComponent} from "../components/forms/Forms";
import {JsxListComponent} from "../components/jsx/JsxList";
import JsxFragment from "../components/jsx/JsxFragment";
import JSXExampleComponent from "../components/jsx/JsxExamples";
import {TabsComponent} from "../components/tabs/Tabs";
import ReduxForm from "../components/forms/ReduxForm";
import CommentListHooks from "../components/comment/CommentListHooks";
import Monsters from "../components/monsters/Monsters";
import Imports from "../components/imports/Imports";
import {Parent} from "../components/parent/Parent";
import Grid from "../components/grid/Grid";
import {RestApiComponent} from "../components/rest-api/RestApi";
import {LifecycleHooksComponent} from "../components/lifecycle-hooks/LifecycleHooks";
import {ClassBasedComponent} from "../components/class-based/ClassBased";
import {CommentListComponent} from "../components/comment/CommentList";
import ClassBasedHooks from "../components/class-based/ClassBasedHooks";
import Component from "../components/component/Component";
import AsyncSetState from "../components/async-set-state/AsyncSetState";
import AsyncSetStateHooks from "../components/async-set-state/AsyncSetStateHooks";
import FireStore from "../components/firestore/FireStore";

export default function ReactPage() {
    return (
        <TabsComponent>
            <div tabName="Components">
                <Component title="Firestore">
                    <FireStore/>
                </Component>

                {/*<Component title="AsyncSetState">*/}
                {/*    <AsyncSetState increaseNumber={1}/>*/}
                {/*    <AsyncSetStateHooks increaseNumber={1}/>*/}
                {/*</Component>*/}

                {/*<Component title="Monsters">*/}
                {/*    <Monsters/>*/}
                {/*</Component>*/}

                {/*<Component title="Imports">*/}
                {/*    <Imports/>*/}
                {/*</Component>*/}

                {/*<Component title="Parent">*/}
                {/*    <Parent/>*/}
                {/*</Component>*/}

                {/*<Component title="Grid">*/}
                {/*    <Grid/>*/}
                {/*</Component>*/}

                {/*<Component title="RestApiComponent">*/}
                {/*    <RestApiComponent/>*/}
                {/*</Component>*/}

                {/*<Component title="LifecycleHooksComponent">*/}
                {/*    <LifecycleHooksComponent/>*/}
                {/*</Component>*/}

                {/*<Component title="ClassBasedComponent">*/}
                {/*    <ClassBasedComponent/>*/}
                {/*</Component>*/}

                {/*<Component title="CommentListComponent">*/}
                {/*    <CommentListComponent/>*/}
                {/*</Component>*/}

                {/*<Component title="CommentListHooks">*/}
                {/*    <CommentListHooks/>*/}
                {/*</Component>*/}

                {/*<Component title="ClassBasedHooks">*/}
                {/*    <ClassBasedHooks/>*/}
                {/*</Component>*/}
            </div>
            <div tabName="Redux Forms">
                <ReduxForm/>
            </div>
            <div tabName="Forms">
                <FormsComponent/>
            </div>
            <div tabName="JSX">
                <JsxListComponent/>
                <JsxFragment
                    prop1="prop1"
                    prop2="prop2"
                />
                <JSXExampleComponent/>
            </div>
        </TabsComponent>
    )
}
