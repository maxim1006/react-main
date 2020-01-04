import React, {memo} from "react";
import "./ShopCollectionItem.scss";

export default memo(({onAddCartItem, imageUrl, name, price}) => (
        <div className="shop-collection-item">
            <div className="shop-collection-item__image-wrapper">
                <button className="shop-collection-item__button"
                        onClick={onAddCartItem}
                >Add to cart
                </button>
                <img
                    loading="lazy"
                    className="shop-collection-item__image"
                    alt={name}
                    src={imageUrl}
                />
            </div>
            <div className="shop-collection-item__price">
                <div className="shop-collection-item__price-name">{name}</div>
                <div className="shop-collection-item__price-value">{price}</div>
            </div>
        </div>
    )
);
