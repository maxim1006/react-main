import React, {Component, Suspense} from 'react';
import './App.scss';
// просто для примера инжекчу доки
import './store/example-from-docs';
import {ReduxComponent} from "./store/Redux";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import MaterialLoaderComponent from "./components/loader/MaterialLoader";
import NotFound from "./components/NotFound";
import MainMenu from "./components/menu/MainMenu";
import RouterPage from "./pages/RouterPage";


const ReactPage = React.lazy(() => import('./pages/ReactPage'));
const LazyPage = React.lazy(() => import('./pages/LazyPage'));
const StreamPage = React.lazy(() => import('./pages/StreamPage'));


class App extends Component {

    render() {
        return (
            <div className="app">
                <main className="app__main">
                    <BrowserRouter>
                        <MainMenu routes={
                            [
                                {to: "/", title: "Redux"},
                                {to: "/react", title: "React"},
                                {to: "/router", title: "Router"},
                                {to: "/stream", title: "Stream"},
                                {to: "/lazy", title: "Lazy"},
                                {to: "/unknown", title: "Unknown"},
                            ]
                        }/>
                        <Suspense fallback={<MaterialLoaderComponent/>}>
                            <Switch>
                                <Route path="/" exact component={ReduxComponent}/>
                                <Route path="/react" component={ReactPage}/>
                                <Route path="/router" component={RouterPage}/>
                                <Route path="/stream" component={StreamPage}/>
                                <Route path="/lazy" component={LazyPage}/>
                                <Route path="*">
                                    <NotFound/>
                                </Route>
                            </Switch>
                        </Suspense>
                    </BrowserRouter>
                </main>
            </div>
        );
    }
}

export default App;


// disable back navigation
// window.history.pushState(null, null, window.location.href);
// window.onpopstate = function() {
//     window.history.go(1);
// };
