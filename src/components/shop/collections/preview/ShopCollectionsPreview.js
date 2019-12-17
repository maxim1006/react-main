import React from "react";
import ShopCollectionsPreviewItem from "./ShopCollectionsPreviewItem";
import "./ShopCollectionsPreview.scss";

export default ({title, items}) => (

    <div className="collections-preview">
        <h3 className="collections-preview__title">{title}</h3>
        <ul className="collections-preview__items">
            {
                items.map(item => <li className="collections-preview__item" key={item.id}><ShopCollectionsPreviewItem {...item}/></li>)
            }
        </ul>
    </div>

);
