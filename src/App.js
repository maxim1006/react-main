import React, {Component} from 'react';
import './App.scss';
// просто для примера инжекчу доки
import './redux/example-from-docs';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import JSXExampleComponent from "./components/jsx/JsxExamples";
import {CommentListComponent} from "./components/comment/CommentList";
import {ClassBasedComponent} from "./components/class-based/ClassBased";
import {LifecycleHooksComponent} from "./components/lifecycle-hooks/LifecycleHooks";
import {TabsComponent} from "./components/tabs/Tabs";
import JsxFragment from "./components/jsx/JsxFragment";
import {FormsComponent} from "./components/forms/Forms";
import {RestApiComponent} from "./components/rest-api/RestApi";
import GridComponent from "./components/grid/Grid";
import {ReduxComponent} from "./redux/Redux";
import {JsxListComponent} from "./components/jsx/JsxList";
import {Parent} from "./components/parent/Parent";
import reducers from "./redux/reducers";

class App extends Component {

    render() {
        return (
            <div className="app">
                <main className="app__main">
                    <TabsComponent>
                        <div tabName="Redux">
                            {/*Обычно оборачиваю в <Provider> главный <App> компонент в index.js */}
                            <Provider store={createStore(reducers,
                                // включаю дев тулы
                                process.env.NODE_ENV !== 'production'
                                && window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())}>
                                <ReduxComponent/>
                            </Provider>
                        </div>
                        <div tabName="Components">
                            <Parent />

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
                </main>
            </div>
        );
    }
}

export default App;
