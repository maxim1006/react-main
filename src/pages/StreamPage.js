import React from "react";
import NotFound from "../components/NotFound";
import {Route, Switch} from "react-router-dom";
import MainMenu from "../components/menu/MainMenu";
import StreamList from "../components/stream/StreamList";
import StreamCreate from "../components/stream/StreamCreate";
import StreamDelete from "../components/stream/StreamDelete";
import StreamShow from "../components/stream/StreamShow";
import StreamEdit from "../components/stream/StreamEdit";
import GoogleAuth from "../components/google-auth/GoogleAuth";

// const RouterLazyRoute = React.lazy(() => import('../components/router/RouterLazyRoute'));

export default function StreamPage() {
    return (
        <>
            <h3>Router examples</h3>

            <GoogleAuth/>

            <MainMenu exact routes={[
                {to: "/stream", title: "StreamList"},
                {to: "/stream/create", title: "StreamCreate"},
                {to: "/stream/delete", title: "StreamDelete"},
                {to: "/stream/edit", title: "StreamEdit"},
                {to: "/stream/show", title: "StreamShow"},
            ]}/>

            <Switch>
                <Route path="/stream" exact component={StreamList}/>
                <Route path="/stream/create" exact component={StreamCreate}/>
                <Route path="/stream/delete" exact component={StreamDelete}/>
                <Route path="/stream/edit/:id" exact component={StreamEdit}/>
                <Route path="/stream/show" exact component={StreamShow}/>
                <Route path="/stream/*">
                    <NotFound>
                        Stream not found
                    </NotFound>
                </Route>
            </Switch>

        </>
    );
}
