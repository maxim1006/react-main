import React, {Component, Suspense} from 'react';
import './App.scss';
// просто для примера инжекчу доки
import './store/example-from-docs';
import {ReduxComponent} from "./store/Redux";
import {Route, Router, Switch} from "react-router-dom";
import MaterialLoaderComponent from "./components/loader/MaterialLoader";
import NotFound from "./components/NotFound";
import MainMenu from "./components/menu/MainMenu";
import RouterPage from "./pages/RouterPage";
import history from "./history";
import ContextTest from "./components/context/ContextTest";
import ThemeContext from "./context/ThemeContext";
import ThemeSelector from "./components/theme/ThemeSelector";


const ReactPage = React.lazy(() => import('./pages/ReactPage'));
const LazyPage = React.lazy(() => import('./pages/LazyPage'));
const StreamPage = React.lazy(() => import('./pages/StreamPage'));


class App extends Component {
    state = {
        theme: "default"
    };

    render() {
        const {theme} = this.state;

        return (
            <ThemeContext.Provider value={theme}>
                <ThemeSelector onChange={this.onThemeChange} value={theme} />
                <div className="app">
                    <main className="app__main">
                        {/*Если хочу иметь возможность кастомно переключать роуты из кода а не по кликам то
                    меняю BrowserRouter, который не поддерживает свойство history={history} (кастомный объект
                     history, а умеет только свой) на Router*/}
                        <Router history={history}>
                            <MainMenu routes={
                                [
                                    {to: "/redux", title: "Redux"},
                                    {to: "/react", title: "React"},
                                    {to: "/router", title: "Router"},
                                    {to: "/stream", title: "Stream"},
                                    {to: "/lazy", title: "Lazy"},
                                    {to: "/context", title: "Context"},
                                    {to: "/unknown", title: "Unknown"},
                                ]
                            }/>
                            <Suspense fallback={<MaterialLoaderComponent/>}>
                                <Switch>
                                    <Route path="/redux" exact component={ReduxComponent}/>
                                    <Route path="/react" component={ReactPage}/>
                                    <Route path="/router" component={RouterPage}/>
                                    <Route path="/stream" component={StreamPage}/>
                                    <Route path="/lazy" component={LazyPage}/>
                                    <Route path="/context" component={ContextTest}/>
                                    <Route path="*">
                                        <NotFound/>
                                    </Route>
                                </Switch>
                            </Suspense>
                        </Router>
                    </main>
                </div>
            </ThemeContext.Provider>
        );
    }

    onThemeChange = (event) => {
        const htmlElement = document.documentElement;
        const theme = event.target.value;

        switch (theme) {
            case "default": {
                htmlElement.classList.remove("theme1", "theme2");
                break;
            }

            default: {
                htmlElement.classList.remove("theme1", "theme2");
                htmlElement.classList.add(theme);
            }
        }

        this.setState({theme});
    }
}

export default App;


// disable back navigation
// window.history.pushState(null, null, window.location.href);
// window.onpopstate = function() {
//     window.history.go(1);
// };
