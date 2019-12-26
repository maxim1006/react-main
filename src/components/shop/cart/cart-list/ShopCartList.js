import React from "react";
import {connect} from "react-redux";
import ShopCartListItem from "../cart-item/ShopCartListItem";
import {selectShopCartItems} from "../../../../store/selectors";

const ShopCartList = ({cartItems}) => {
    return (
        cartItems ?
            <ul className="shop-cart-list">
                {
                    Object.entries(cartItems).map(([id, item]) => (
                        <li className="shop-cart-list__item-wrapper" key={id}>
                            <ShopCartListItem item={item}/>
                        </li>
                    ))
                }
            </ul>
            :
            null
    );
};


const mapStateToProps = (state, ownProps) => ({
    // во все селекторы передаю стейт так как он нужен для самого верхнего селектора
    cartItems: selectShopCartItems(state)
});


export default connect(mapStateToProps)(ShopCartList);
