import React, { Suspense } from 'react';
import './App.scss';
import './i18n/i18n';
import { Navigate, Route, Routes } from 'react-router-dom';
import MaterialLoaderComponent from './components/loader/MaterialLoader';
import NotFound from './components/NotFound';
import MainMenu from './components/menu/MainMenu';
import RouterPage from './pages/RouterPage';
import GeneralInfo from './components/general-info/GeneralInfo';
import TestsPage from '@app/pages/TestsPage';
import { GeneralInfoProvider } from '@app/components/context/general-info.context';

const ReduxToolkit = React.lazy(() => import('./pages/Rt.page'));
const ReactPage = React.lazy(() => import('./pages/ReactPage'));
const TypescriptPage = React.lazy(() => import('./pages/typescript/typescript.page'));
const LazyPage = React.lazy(() => import('./pages/LazyPage'));
const ShopPage = React.lazy(() => import('./pages/ShopPage'));
const ContextPage = React.lazy(() => import('./pages/ContextPage'));
const ReduxPage = React.lazy(() => import('./pages/ReduxPage'));

const App: React.FC = () => {
    // пример импортов из global.ts и custom.d.ts - и так и так сработает
    // console.log(window.customProp);
    // console.log(window.customFoo);

    return (
        <GeneralInfoProvider>
            <GeneralInfo />

            <div className='app'>
                <main className='app__main'>
                    {/* Если хочу иметь возможность кастомно переключать роуты из кода а не по кликам то
                    меняю BrowserRouter, который не поддерживает свойство history={history} (кастомный объект
                     history, а умеет только свой) на Router*/}
                    {/* Тут раскомментировал так как в индексе использую редакс роутер, если не нужен то тут
                     раскомментить*/}
                    {/* <Router history={history}> */}
                    <MainMenu
                        routes={[
                            { to: '/react', title: 'React' },
                            { to: '/rt', title: 'Redux Toolkit' },
                            { to: '/typescript', title: 'Typescript' },
                            { to: '/shop', title: 'Shop' },
                            { to: '/redux', title: 'Redux' },
                            { to: '/router', title: 'Router' },
                            { to: '/lazy', title: 'Lazy' },
                            { to: '/context', title: 'Context' },
                            { to: '/hooks', title: 'Hooks' },
                            { to: '/intl', title: 'Intl' },
                            { to: '/tests', title: 'Tests' },
                            { to: '/unknown', title: 'Unknown' },
                        ]}
                    />
                    {/* При переключении роутера будет показываться MaterialLoaderComponent, за это отвечает Suspense*/}
                    <Suspense fallback={<MaterialLoaderComponent />}>
                        {/* покажет только первый найденный роут*/}
                        <Routes>
                            <Route index element={<Navigate to='/react' />} />
                            <Route path='/react' element={<ReactPage />} />
                            <Route path='/rt' element={<ReduxToolkit />} />
                            <Route path='/typescript' element={<TypescriptPage />} />
                            <Route path='/shop' element={<ShopPage />} />
                            <Route path='/redux' element={<ReduxPage />} />
                            {/*теперь всем роутам у кого есть чайлды нужна * пример: /router/* */}
                            <Route path='/router/*' element={<RouterPage />} />
                            <Route path='/lazy' element={<LazyPage />} />
                            <Route path='/context' element={<ContextPage />} />
                            <Route path='/tests' element={<TestsPage />} />
                            <Route path='*' element={<NotFound />} />
                        </Routes>
                    </Suspense>
                    {/* </Router> */}
                </main>
            </div>
        </GeneralInfoProvider>
    );
};

export default App;

// disable back navigation
// window.history.pushState(null, null, window.location.href);
// window.onpopstate = function() {
//     window.history.go(1);
// };
