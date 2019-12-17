import shopData from "../shop.data";
import React from "react";
import ShopCollectionsPreview from "./preview/ShopCollectionsPreview";

export default () => (
    shopData.map(item => <ShopCollectionsPreview key={item.id} {...item}/>)
);

