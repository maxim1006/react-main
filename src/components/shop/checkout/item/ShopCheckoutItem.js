import React from "react";
import "./ShopCheckoutItem.scss";

export default ({name, description, quantity, price, onRemove, onRemoveItem, onAddItem}) => (
    <div className="shop-checkout-item">
        <div className="shop-checkout-item__block">{name}</div>
        <div className="shop-checkout-item__block">{description}</div>
        <div className="shop-checkout-item__block">
            {/*UTF-8 dingbats*/}
            <div className="shop-checkout-item__arrow"
                 onClick={onRemoveItem}
            >
                &#10094;
            </div>
            {quantity}
            <div className="shop-checkout-item__arrow"
                 onClick={onAddItem}
            >
                &#10095;
            </div>
        </div>
        <div className="shop-checkout-item__block">{price}</div>
        <div className="shop-checkout-item__block"
             onClick={onRemove}
        >
            <span className="shop-checkout-item__remove">&#10005;</span>
        </div>
    </div>
);

