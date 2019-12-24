import React from "react";
import ShopSignIn from "../sign-in/ShopSignIn";
import ShopSignUp from "../sign-up/sign-up";
import "./SignInAndSignUp.scss";

export default () => (
    <div className="sign-in-and-sign-up">
        <ShopSignIn/>
        <ShopSignUp/>
    </div>
);
