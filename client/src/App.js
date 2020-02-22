import React, {Component, Suspense} from 'react';
import './App.scss';
import {Route, Router, Switch} from "react-router-dom";
import MaterialLoaderComponent from "./components/loader/MaterialLoader";
import NotFound from "./components/NotFound";
import MainMenu from "./components/menu/MainMenu";
import RouterPage from "./pages/RouterPage";
import history from "./history";
import GeneralInfo from "./components/general-info/GeneralInfo";
import ContextGeneralInfo from "./components/context/ContextGeneralInfo";


const ReactPage = React.lazy(() => import('./pages/ReactPage'));
const LazyPage = React.lazy(() => import('./pages/LazyPage'));
const StreamPage = React.lazy(() => import('./pages/StreamPage'));
const HooksPage = React.lazy(() => import('./pages/HooksPage'));
const ShopPage = React.lazy(() => import('./pages/ShopPage'));
const ContextPage = React.lazy(() => import('./pages/ContextPage'));
const ReduxPage = React.lazy(() => import('./pages/ReduxPage'));


class App extends Component {
    render() {
        return (
            <ContextGeneralInfo>
                <GeneralInfo/>

                <div className="app">
                    <main className="app__main">
                        {/*Если хочу иметь возможность кастомно переключать роуты из кода а не по кликам то
                    меняю BrowserRouter, который не поддерживает свойство history={history} (кастомный объект
                     history, а умеет только свой) на Router*/}
                        <Router history={history}>
                            <MainMenu routes={
                                [
                                    {to: "/shop", title: "Shop"},
                                    {to: "/redux", title: "Redux"},
                                    {to: "/react", title: "React"},
                                    {to: "/router", title: "Router"},
                                    {to: "/stream", title: "Stream"},
                                    {to: "/lazy", title: "Lazy"},
                                    {to: "/context", title: "Context"},
                                    {to: "/hooks", title: "Hooks"},
                                    {to: "/unknown", title: "Unknown"},
                                ]
                            }/>
                            {/*При переключении роутера будет показываться MaterialLoaderComponent, за это отвечает Suspense*/}
                            <Suspense fallback={<MaterialLoaderComponent/>}>
                                {/*покажет только первый найденный роут*/}
                                <Switch>
                                    <Route path="/shop" component={ShopPage}/>
                                    <Route path="/redux" component={ReduxPage}/>
                                    <Route path="/react" component={ReactPage}/>
                                    <Route path="/router" component={RouterPage}/>
                                    <Route path="/hooks" component={HooksPage}/>
                                    <Route path="/stream" component={StreamPage}/>
                                    <Route path="/lazy" component={LazyPage}/>
                                    <Route path="/context" component={ContextPage}/>
                                    <Route path="*">
                                        <NotFound history={history}/>
                                    </Route>
                                </Switch>
                            </Suspense>
                        </Router>
                    </main>
                </div>
            </ContextGeneralInfo>
        );
    }
}

export default App;


// disable back navigation
// window.history.pushState(null, null, window.location.href);
// window.onpopstate = function() {
//     window.history.go(1);
// };
