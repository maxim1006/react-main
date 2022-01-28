import React, { memo, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { shopAddCartItem } from '../../../store/actions';
import ShopCollectionItem from './item/ShopCollectionItem';
import { StyledShopCollectionItem, StyledShopCollectionItems, StyledShopCollectionTitle } from './StyledShopCollection';
import MaterialLoader from '../../loader/MaterialLoader';

export default memo(({ match, history, location }) => {
    const shopData = useSelector(state => state.shopData.data);
    const categoryName = match.params.categoryId;

    let category;

    if (shopData) {
        category = Object.values(shopData).find(({ routeName }) => routeName === categoryName);
    }

    const dispatch = useDispatch();
    const onAddCartItem = useCallback(item => _ => dispatch(shopAddCartItem(item)), [dispatch]);

    return shopData ? (
        <div className='shop-collection'>
            <StyledShopCollectionTitle>{category.title}</StyledShopCollectionTitle>
            <StyledShopCollectionItems>
                {category.items.map(item => (
                    <StyledShopCollectionItem key={item.id}>
                        <ShopCollectionItem onAddCartItem={onAddCartItem(item)} {...item} />
                    </StyledShopCollectionItem>
                ))}
            </StyledShopCollectionItems>
        </div>
    ) : (
        <MaterialLoader />
    );
});
