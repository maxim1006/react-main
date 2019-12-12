import React from 'react';
import {FormsComponent} from "../components/forms/Forms";
import {JsxListComponent} from "../components/jsx/JsxList";
import JsxFragment from "../components/jsx/JsxFragment";
import JSXExampleComponent from "../components/jsx/JsxExamples";
import {TabsComponent} from "../components/tabs/Tabs";
import ReduxForm from "../components/forms/ReduxForm";
import CommentListHooks from "../components/comment/CommentListHooks";

export default function ReactPage() {
    return (
        <TabsComponent>
            <div tabName="Components">
                {/*<Imports/>*/}

                {/*<Parent/>*/}

                {/*<GridComponent/>*/}

                {/*<RestApiComponent/>*/}

                {/*<LifecycleHooksComponent/>*/}

                {/*<ClassBasedComponent/>*/}

                {/*<CommentListComponent/>*/}
                <CommentListHooks/>

                {/*<ClassBasedHooks/>*/}
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
