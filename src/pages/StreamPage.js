import React from "react";
import NotFound from "../components/NotFound";
import {Route, Switch} from "react-router-dom";
import MainMenu from "../components/menu/MainMenu";
import StreamList from "../components/stream/StreamList";
import StreamCreate from "../components/stream/StreamCreate";
import StreamShow from "../components/stream/StreamShow";
import StreamEdit from "../components/stream/StreamEdit";
import GoogleAuth from "../components/google-auth/GoogleAuth";

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
                <Route path="/stream" exact component={StreamList}/>
                <Route path="/stream/create" exact component={StreamCreate}/>
                <Route path="/stream/edit/:id" exact component={StreamEdit}/>
                <Route path="/stream/:id" exact component={StreamShow}/>
                <Route path="/stream/*">
                    <NotFound>
                        Stream not found
                    </NotFound>
                </Route>
            </Switch>

        </>
    );
}
