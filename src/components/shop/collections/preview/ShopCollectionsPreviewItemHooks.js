import React, {useCallback} from "react";
import "./ShopCollectionsPreviewItem.scss";
import {useDispatch} from "react-redux";
import {shopAddCartItem} from "../../../../store/actions";

export default ({item}) => {
    const {imageUrl, name, price} = item;

    const dispatch = useDispatch();
    const addCartItem = useCallback(
        () => dispatch(shopAddCartItem(item)),
        [dispatch, item]
    );

    return (
        <div className="collections-preview-item">
            <div className="collections-preview-item__image-wrapper">
                <button className="collections-preview-item__button"
                        onClick={addCartItem}
                >Add to cart
                </button>
                <img loading="lazy" className="collections-preview-item__image" alt="shop preview item" src={imageUrl}/>
            </div>
            <div className="collections-preview-item__price">
                <div className="collections-preview-item__price-name">{name}</div>
                <div className="collections-preview-item__price-value">{price}</div>
            </div>
        </div>
    )
};
