import React from "react";
import ShopButton from "../button/ShopButton";
import "./ShopCartDropdown.scss";
import ShopCartList from "../cart/cart-list/ShopCartList";
import {withRouter} from "react-router-dom";
import connect from "react-redux/es/connect/connect";
import {shopToggleDropdown} from "../../../store/actions";

const ShopCartDropdown =  ({history, dispatch}) => {
    return (
        <div className="shop-cart-dropdown">
            <div className="shop-cart-dropdown__list">
                <ShopCartList/>
            </div>
            <div className="shop-cart-dropdown__button">
                <ShopButton styleClass="_full-width"
                    onClick={() => {
                        history.push("/shop/checkout");
                        dispatch(shopToggleDropdown());
                    }}
                >
                    Check out
                </ShopButton>
            </div>
        </div>
    );
};

// если не передаю mapDispatchToProps то connect автоматом вставляет dispatch в проперти, оставлю как альтернативу стандартному варианту
export default withRouter(connect()(ShopCartDropdown));
// обычно делаю так
// export default withRouter(connect(null, {shopToggleDropdown})(ShopCartDropdown));
