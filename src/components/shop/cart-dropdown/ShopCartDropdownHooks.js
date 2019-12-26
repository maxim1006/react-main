import React, {useCallback} from "react";
import ShopButton from "../button/ShopButton";
import "./ShopCartDropdown.scss";
import ShopCartList from "../cart/cart-list/ShopCartList";
import {withRouter} from "react-router-dom";
import {shopToggleDropdown} from "../../../store/actions";
import {useDispatch} from "react-redux";
import ShopCartListHooks from "../cart/cart-list/ShopCartListHooks";

const ShopCartDropdown = ({history}) => {
    const dispatch = useDispatch();
    const toggleDropdown = useCallback(() => dispatch(shopToggleDropdown()),
        [dispatch]);

    return (
        <div className="shop-cart-dropdown">
            <div className="shop-cart-dropdown__list">
                <ShopCartListHooks/>
            </div>
            <div className="shop-cart-dropdown__button">
                <ShopButton styleClass="_full-width"
                            onClick={() => {
                                history.push("/shop/checkout");
                                toggleDropdown();
                            }}
                >
                    Check out
                </ShopButton>
            </div>
        </div>
    );
};

export default withRouter(ShopCartDropdown);
