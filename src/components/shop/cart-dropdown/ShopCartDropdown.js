import React from "react";
import ShopButton from "../button/ShopButton";
import "./ShopCartDropdown.scss";
import ShopCartList from "../cart/cart-list/ShopCartList";

export default () => {
    return (
        <div className="shop-cart-dropdown">
            <div className="shop-cart-dropdown__list">
                <ShopCartList/>
            </div>
            <div className="shop-cart-dropdown__button">
                <ShopButton styleClass="_full-width">
                    Check out
                </ShopButton>
            </div>
        </div>
    );
}
