import React, { memo } from "react";
import {
    StyledShopCollectionItem,
    StyledShopCollectionItemButton,
    StyledShopCollectionItemImage,
    StyledShopCollectionItemImageWrapper,
    StyledShopCollectionItemPrice
} from "./StyledShopCollectionItem";

export default memo(({ onAddCartItem, imageUrl, name, price }) => (
    <StyledShopCollectionItem>
        <StyledShopCollectionItemImageWrapper>
            <StyledShopCollectionItemButton onClick={onAddCartItem}>
                Add to cart
            </StyledShopCollectionItemButton>
            <StyledShopCollectionItemImage
                loading="lazy"
                alt={name}
                src={imageUrl}
            />
        </StyledShopCollectionItemImageWrapper>
        <StyledShopCollectionItemPrice>
            <div className="shop-collection-item__price-name">{name}</div>
            <div className="shop-collection-item__price-value">{price}</div>
        </StyledShopCollectionItemPrice>
    </StyledShopCollectionItem>
));
