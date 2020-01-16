import React from "react";
import NotFound from "../components/NotFound";
import {Route, Switch} from "react-router-dom";
import MainMenu from "../components/menu/MainMenu";
import RouterExactRoute from "../components/router/RouterExactRoute";
import RouterRoute1 from "../components/router/RouterRoute1";

const RouterLazyRoute = React.lazy(() => import('../components/router/RouterLazyRoute'));

export default () => {
    return (
        <>
            <h3>Router examples</h3>

            <MainMenu routes={[
                {to: "/router/exact", title: "RouterExactRoute"},
                {to: "/router/route1", title: "RouterRoute1"},
                {to: "/router/lazy", title: "RouterLazyRoute"},
                {to: "/router/*", title: "RouterLazyNotFound"},
            ]}/>
            {/*покажет только первый найденный роут*/}
            <Switch>

                {/* Этот роутер закомментировал так как если раскоментить то он будет
                    покажется сразу при переходе на /router как и RouterExactRoute
                    это чисто для примера что такое exact
                    <Route path="/router" exact component={RouterExactRoute}/>
                */}
                <Route path="/router/exact" exact component={RouterExactRoute}/>
                <Route path="/router/route1" component={RouterRoute1}/>
                <Route path="/router/lazy" component={RouterLazyRoute}/>
                <Route path="/router/*">
                    <NotFound>
                        Router not found
                    </NotFound>
                </Route>
            </Switch>

        </>
    );
}
