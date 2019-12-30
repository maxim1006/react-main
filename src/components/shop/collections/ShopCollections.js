import shopData from "../shop.data";
import React, {Component} from "react";
import ShopCollectionsPreview from "./preview/ShopCollectionsPreview";

export default class ShopCollections extends Component {
    render() {
        return (
            shopData.map(item => {
                const currentItem = {...item};
                // in Preview show 4 items
                currentItem["items"] = currentItem["items"].slice(0, 4);

                return <ShopCollectionsPreview key={currentItem.id} {...currentItem}/>
            })
        );
    }
}

