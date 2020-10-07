import React, { Suspense, useState } from 'react';
import './App.scss';
import { Route, Switch } from 'react-router-dom';
import MaterialLoaderComponent from './components/loader/MaterialLoader';
import NotFound from './components/NotFound';
import MainMenu from './components/menu/MainMenu';
import RouterPage from './pages/RouterPage';
import GeneralInfo from './components/general-info/GeneralInfo';
import ContextGeneralInfo from './components/context/ContextGeneralInfo';

const ReduxToolkit = React.lazy(() => import('./pages/redux-toolkit/rt.page'));
const ReactPage = React.lazy(() => import('./pages/ReactPage'));
const LazyPage = React.lazy(() => import('./pages/LazyPage'));
const StreamPage = React.lazy(() => import('./pages/StreamPage'));
const HooksPage = React.lazy(() => import('./pages/HooksPage'));
const ShopPage = React.lazy(() => import('./pages/ShopPage'));
const ContextPage = React.lazy(() => import('./pages/ContextPage'));
const ReduxPage = React.lazy(() => import('./pages/ReduxPage'));
const IntlPage = React.lazy(() => import('./pages/IntlPage'));
const ProReactPage = React.lazy(() => import('./pages/pro-react/pro-react.page'));
const TypescriptPage = React.lazy(() => import('./pages/typescript/typescript.page'));

const App: React.FC = () => {
    return (
        <ContextGeneralInfo>
            <GeneralInfo />

            <div className="app">
                <main className="app__main">
                    {/* Если хочу иметь возможность кастомно переключать роуты из кода а не по кликам то
                    меняю BrowserRouter, который не поддерживает свойство history={history} (кастомный объект
                     history, а умеет только свой) на Router*/}
                    {/* Тут раскомментировал так как в индексе использую редакс роутер, если не нужен то тут
                     раскомментить*/}
                    {/* <Router history={history}> */}
                    <MainMenu
                        routes={[
                            { to: '/typescript', title: 'Typescript' },
                            { to: '/rt', title: 'Redux Toolkit' },
                            { to: '/pro-react', title: 'Pro react' },
                            { to: '/shop', title: 'Shop' },
                            { to: '/redux', title: 'Redux' },
                            { to: '/react', title: 'React' },
                            { to: '/router', title: 'Router' },
                            { to: '/stream', title: 'Stream' },
                            { to: '/lazy', title: 'Lazy' },
                            { to: '/context', title: 'Context' },
                            { to: '/hooks', title: 'Hooks' },
                            { to: '/intl', title: 'Intl' },
                            { to: '/unknown', title: 'Unknown' },
                        ]}
                    />
                    {/* При переключении роутера будет показываться MaterialLoaderComponent, за это отвечает Suspense*/}
                    <Suspense fallback={<MaterialLoaderComponent />}>
                        {/* покажет только первый найденный роут*/}
                        <Switch>
                            <Route path="/typescript" component={TypescriptPage} />
                            <Route path="/rt" component={ReduxToolkit} />
                            <Route path="/pro-react" component={ProReactPage} />
                            <Route path="/shop" component={ShopPage} />
                            <Route path="/redux" component={ReduxPage} />
                            <Route path="/react" component={ReactPage} />
                            <Route path="/router" component={RouterPage} />
                            <Route path="/hooks" component={HooksPage} />
                            <Route path="/stream" component={StreamPage} />
                            <Route path="/lazy" component={LazyPage} />
                            <Route path="/context" component={ContextPage} />
                            <Route path="/intl" component={IntlPage} />
                            <Route path="*">
                                <NotFound />
                            </Route>
                        </Switch>
                    </Suspense>
                    {/* </Router> */}
                </main>
            </div>
        </ContextGeneralInfo>
    );
};

export default App;

// disable back navigation
// window.history.pushState(null, null, window.location.href);
// window.onpopstate = function() {
//     window.history.go(1);
// };
