import React from "react";
import "./ShopCollectionsPreviewItem.scss";

export default ({name, imageUrl, price}) => (
    <div className="collections-preview-item">
        <h5>{name}</h5>
        <div className="collections-preview-item__image-wrapper">
            <button className="collections-preview-item__button">Add to cart</button>
            <img className="collections-preview-item__image" alt="shop preview item" src={imageUrl} />
        </div>
        <p>price: {price}</p>
    </div>
);
