import React from "react";
import {connect} from "react-redux";
import ShopCartListItem from "../cart-item/ShopCartListItem";
import {selectShopCartItems} from "../../../../store/selectors";
import {createStructuredSelector} from "reselect";
import "./ShopCartList.scss";

const ShopCartList = ({cartItems}) => {
    return (
        Object.entries(cartItems).length ?
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
            <div className="shop-cart-list__empty">
                "No items"
            </div>

    );
};

// запись с createStructuredSelector удобнее
// const mapStateToProps = (state, ownProps) => ({
//     // во все селекторы передаю стейт так как он нужен для самого верхнего селектора
//     cartItems: selectShopCartItems(state)
// });

const mapStateToProps = createStructuredSelector({
    cartItems: selectShopCartItems
});


export default connect(mapStateToProps)(ShopCartList);
