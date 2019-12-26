import React from "react";
import "./ShopCollectionsPreview.scss";
import ShopCollectionsPreviewItemHooks from "./ShopCollectionsPreviewItemHooks";

export default ({title, items}) => (

    <div className="collections-preview">
        <h3 className="collections-preview__title">{title}</h3>
        <ul className="collections-preview__items">
            {
                items.map(item => <li className="collections-preview__item" key={item.id}>
                    <ShopCollectionsPreviewItemHooks item={item}/></li>)
            }
        </ul>
    </div>

);
