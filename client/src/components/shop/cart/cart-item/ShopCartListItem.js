import React from "react";
import "./ShopCartListItem.scss"

export default ({item: {imageUrl, name, price, quantity}}) => (
    <div className="shop-cart-list-item">
        <div className="shop-cart-list-item__image-wrapper">
            <img
                loading="lazy"
                className="shop-cart-list-item__image"
                src={imageUrl}
                alt={name}
            />
        </div>
        <div className="shop-cart-list-item__info">
            <div className="shop-cart-list-item__name">{name}</div>
            <span className="shop-cart-list-item__price-and-quantity">{quantity} x {price}</span>
        </div>
    </div>
);

