import React, {Component, Suspense} from 'react';
import './App.scss';
// просто для примера инжекчу доки
import './store/example-from-docs';
import {ReduxComponent} from "./store/Redux";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import MaterialLoaderComponent from "./components/loader/MaterialLoader";
import NotFound from "./components/NotFound";
import MainMenu from "./components/menu/MainMenu";


const ReactPage = React.lazy(() => import('./pages/ReactPage'));


class App extends Component {

    render() {
        return (
            <div className="app">
                <main className="app__main">
                    <Suspense fallback={<MaterialLoaderComponent/>}>
                        <BrowserRouter>
                            <MainMenu/>
                            <Switch>
                                <Route path="/" exact component={ReduxComponent}/>
                                <Route path="/react" component={ReactPage}/>
                                <Route path="*">
                                    <NotFound/>
                                </Route>
                            </Switch>
                        </BrowserRouter>
                    </Suspense>
                </main>
            </div>
        );
    }
}

export default App;
