import React from "react";
import MainMenu from "../components/menu/MainMenu";
import {Route, Switch} from "react-router-dom";
import ShopHome from "../components/shop/home/ShopHome";
import "../components/shop/Shop.scss";
import ShopCollections from "../components/shop/collections/ShopCollections";
import NotFound from "../components/NotFound";
// так импорчу свг
import {ReactComponent as Logo} from "../assets/icons/crown.svg";
import SignInAndSignUp from "../components/shop/sign-in-and-sign-up/SignInAndSignUp";

export default () => (
    <div className="shop">
        <h2 className="shop__title">
            Shop
            <Logo className="shop__logo"/>
        </h2>

        <MainMenu exact routes={[
            {to: "/shop", title: "Home"},
            {to: "/shop/sign", title: "Sign"},
            {to: "/shop/collections", title: "Collections"},
        ]}/>

        {/*покажет только первый найденный роут*/}
        {/*Только ShopHome будет иметь доступ к history, location и match* поэтому исползьую withRouter во внутренних компонентах */}
        <Switch>
            <Route path="/shop" exact component={ShopHome}/>
            <Route path="/shop/sign" component={SignInAndSignUp}/>
            <Route path="/shop/collections" exact component={ShopCollections}/>
            <Route path="/shop/*">
                <NotFound>
                    Shop not found
                </NotFound>
            </Route>
        </Switch>
    </div>
);
