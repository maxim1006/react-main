import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { shopAddCartItem } from '../../../../../store/actions';
import {
    StyledShopCollectionsPreviewItem,
    StyledShopCollectionsPreviewItemButton,
    StyledShopCollectionsPreviewItemImage,
    StyledShopCollectionsPreviewItemImageWrapper,
    StyledShopCollectionsPreviewItemPrice,
    StyledShopCollectionsPreviewItemPriceName,
    StyledShopCollectionsPreviewItemPriceValue,
} from './StyledShopCollectionsPreviewItem';

export default ({ item }) => {
    const { imageUrl, name, price } = item;

    const dispatch = useDispatch();
    const addCartItem = useCallback(() => dispatch(shopAddCartItem(item)), [dispatch, item]);

    return (
        <StyledShopCollectionsPreviewItem>
            <StyledShopCollectionsPreviewItemImageWrapper>
                <StyledShopCollectionsPreviewItemButton onClick={addCartItem}>
                    Add to cart
                </StyledShopCollectionsPreviewItemButton>
                <StyledShopCollectionsPreviewItemImage loading="lazy" alt="shop preview item" src={imageUrl} />
            </StyledShopCollectionsPreviewItemImageWrapper>
            <StyledShopCollectionsPreviewItemPrice>
                <StyledShopCollectionsPreviewItemPriceName>{name}</StyledShopCollectionsPreviewItemPriceName>
                {/* Пример как сделать любой селектор из styled component, вместо слеектора могу передать любой компонент*/}
                <StyledShopCollectionsPreviewItemPriceValue as="span">
                    {price}
                </StyledShopCollectionsPreviewItemPriceValue>
            </StyledShopCollectionsPreviewItemPrice>
        </StyledShopCollectionsPreviewItem>
    );
};
