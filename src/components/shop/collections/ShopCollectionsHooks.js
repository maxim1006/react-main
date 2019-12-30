import shopData from "../shop.data";
import React from "react";
import ShopCollectionsPreview from "./preview/ShopCollectionsPreview";

export default () => (
    Object.values(shopData).map(item => {
        const currentItem = {...item};
        // in Preview show 4 items
        currentItem["items"] = currentItem["items"].slice(0, 4);

        return <ShopCollectionsPreview key={currentItem.id} {...currentItem}/>
    })
);

