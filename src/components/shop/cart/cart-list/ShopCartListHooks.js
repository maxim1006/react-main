import React from "react";
import {useSelector} from "react-redux";
import ShopCartListItem from "../cart-item/ShopCartListItem";
import {selectShopCartItems} from "../../../../store/selectors";

export default () => {
    // селекторы использую чтобы предотвратить пересчет в них стейта c помощью мемоизации, а то будет каждый раз при ренедеренге компоненты пересчитываться логика в селекторе, а так только когда касается этого стейта
    const cartItems = useSelector(selectShopCartItems);

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
