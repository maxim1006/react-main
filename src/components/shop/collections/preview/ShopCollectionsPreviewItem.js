import React from "react";
import "./ShopCollectionsPreviewItem.scss";
import {connect} from "react-redux";
import {shopAddCartItem} from "../../../../store/actions";

const ShopCollectionPreviewItem = ({item, shopAddCartItem}) => {
    const {imageUrl, name, price} = item;

    return (
        <div className="collections-preview-item">
            <div className="collections-preview-item__image-wrapper">
                <button className="collections-preview-item__button"
                        onClick={() => {shopAddCartItem(item)}}
                >Add to cart
                </button>
                <img
                    loading="lazy"
                    width={300}
                    height={350}
                    className="collections-preview-item__image"
                    alt="shop preview item"
                    src={imageUrl}
                />
            </div>
            <div className="collections-preview-item__price">
                <div className="collections-preview-item__price-name">{name}</div>
                <div className="collections-preview-item__price-value">{price}</div>
            </div>
        </div>
    )
};

export default connect(null, {
    shopAddCartItem
})(ShopCollectionPreviewItem);
