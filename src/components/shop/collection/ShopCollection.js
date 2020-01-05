import React, {memo, useCallback} from "react";
import shopData from "../shop.data";
import {useDispatch} from "react-redux";
import {shopAddCartItem} from "../../../store/actions";
import ShopCollectionItem from "./item/ShopCollectionItem";
import {StyledShopCollectionItem, StyledShopCollectionItems, StyledShopCollectionTitle} from "./StyledShopCollection";

export default memo(({match, history, location}) => {
    const category = match.params.categoryId;
    const {title, items} = Object.values(shopData).find(({routeName}) => routeName === category);

    const dispatch = useDispatch();
    const onAddCartItem = useCallback((item) => _ => dispatch(shopAddCartItem(item)), [dispatch]);

    return (
        <div className="shop-collection">
            <StyledShopCollectionTitle>
                {title}
            </StyledShopCollectionTitle>
            <StyledShopCollectionItems>
                {
                    items.map((item) => (
                        <StyledShopCollectionItem key={item.id}>
                            <ShopCollectionItem onAddCartItem={onAddCartItem(item)} {...item}/>
                        </StyledShopCollectionItem>
                    ))
                }
            </StyledShopCollectionItems>
        </div>
    )
});
