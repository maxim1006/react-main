import React from "react";
import ShopCollectionsPreview from "./preview/ShopCollectionsPreview";
import {useSelector} from "react-redux";
import MaterialLoader from "../../loader/MaterialLoader";

export default () => {
    const shopData = useSelector(state => state.shopData);

    return shopData ?
        Object.values(shopData).map(item => {
            const currentItem = {...item};
            // in Preview show 4 items
            currentItem["items"] = currentItem["items"].slice(0, 4);

            return <ShopCollectionsPreview key={currentItem.id} {...currentItem}/>
        }) :
        <MaterialLoader/>
    ;
};

