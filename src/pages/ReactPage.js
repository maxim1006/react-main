import React from 'react';
import {Parent} from "../components/parent/Parent";
import GridComponent from "../components/grid/Grid";
import {RestApiComponent} from "../components/rest-api/RestApi";
import {LifecycleHooksComponent} from "../components/lifecycle-hooks/LifecycleHooks";
import {ClassBasedComponent} from "../components/class-based/ClassBased";
import {CommentListComponent} from "../components/comment/CommentList";
import {FormsComponent} from "../components/forms/Forms";
import {JsxListComponent} from "../components/jsx/JsxList";
import JsxFragment from "../components/jsx/JsxFragment";
import JSXExampleComponent from "../components/jsx/JsxExamples";
import {TabsComponent} from "../components/tabs/Tabs";
import ReduxForm from "../components/forms/ReduxForm";

export default function ReactPage() {
    return (
        <TabsComponent>
            <div tabName="Redux Forms">
                <ReduxForm/>
            </div>
            <div tabName="Components">
                <Parent/>

                <GridComponent/>

                <RestApiComponent/>

                <LifecycleHooksComponent/>

                <ClassBasedComponent/>

                <CommentListComponent/>
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
