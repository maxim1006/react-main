import React from "react";
import NotFound from "../components/NotFound";
import {Route, Switch} from "react-router-dom";
import MainMenu from "../components/menu/MainMenu";
import GoogleAuth from "../components/google-auth/GoogleAuth";
import StreamCreateHooks from "../components/stream/StreamCreateHooks";
import StreamEditHooks from "../components/stream/StreamEditHooks";
import StreamShowHooks from "../components/stream/StreamShowHooks";
import StreamListHooks from "../components/stream/StreamListHooks";

// const RouterLazyRoute = React.lazy(() => import('../components/router/RouterLazyRoute'));

export default () => {
    return (
        <>
            <h3>Router examples</h3>

            <GoogleAuth/>

            <MainMenu exact routes={[
                {to: "/stream", title: "StreamList"},
                {to: "/stream/create", title: "StreamCreate"},
            ]}/>

            {/*по умолчанию если роуты не обернуть в Switch в случае /stream/create покажется также /stream/:id, чтобы
            этого избежать оборачиваю в Switch, покажется только первый подходящий роут*/}
            <Switch>
                <Route path="/stream" exact component={StreamListHooks}/>
                <Route path="/stream/create" exact component={StreamCreateHooks}/>
                <Route path="/stream/edit/:id" exact component={StreamEditHooks}/>
                <Route path="/stream/:id" exact component={StreamShowHooks}/>
                <Route path="/stream/*">
                    <NotFound>
                        Stream not found
                    </NotFound>
                </Route>
            </Switch>

        </>
    );
}
