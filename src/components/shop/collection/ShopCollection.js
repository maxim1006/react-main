import React, {memo, useCallback} from "react";
import shopData from "../shop.data";
import {useDispatch} from "react-redux";
import {shopAddCartItem} from "../../../store/actions";
import ShopCollectionItem from "./ShopCollectionItem";
import "./ShopCollection.scss";

export default memo(({match}) => {
    const category = match.params.categoryId;
    const {title, items} = shopData.filter(({routeName}) => routeName === category)[0];

    const dispatch = useDispatch();
    const onAddCartItem = useCallback((item) => _ => dispatch(shopAddCartItem(item)), [dispatch]);

    return (
        <div className="shop-collection">
            <h3 className="shop-collection__title">
                {title}
            </h3>
            <ul className="shop-collection__items">
                {
                    items.map((item) => (
                        <li className="shop-collection__item" key={item.id}>
                            <ShopCollectionItem onAddCartItem={onAddCartItem(item)} {...item}/>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
});
