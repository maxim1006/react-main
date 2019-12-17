import shopData from "../shop.data";
import React, {Component} from "react";
import ShopCollectionsPreview from "./preview/ShopCollectionsPreview";

export default class ShopCollections extends Component {
    render() {
        return (
            shopData.map(item => <ShopCollectionsPreview key={item.id} {...item}/>)
        );
    }
}

