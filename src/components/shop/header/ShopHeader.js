import React from "react";
// так импорчу свг
import {ReactComponent as Logo} from "../../../assets/icons/crown.svg";
import {auth} from "../../../firebase/firebase.utils";
import {Link} from "react-router-dom";
import "./ShopHeader.scss";

export default ({user}) => (
    <div className="shop-header">
        <h2 className="shop-header__title">
            Shop
        </h2>
        <Logo className="shop-header__logo"/>
        <div className="shop-header__sign">
            {
                user ?
                    <>
                        <a href="/" onClick={(e) => {
                            e.preventDefault();
                            auth.signOut();
                        }}>Sign Out</a>
                        <div>User info ({JSON.stringify(user)})</div>
                    </> :
                    <Link to="/shop/sign">Sign In</Link>
            }
        </div>
    </div>
);
