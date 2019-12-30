import React from "react";
import "./ShopCollectionsPreview.scss";
import ShopCollectionsPreviewItemHooks from "./ShopCollectionsPreviewItemHooks";
import {Link, withRouter} from "react-router-dom";

export default withRouter(({title, items}) => (
    <div className="collections-preview">
        <h3 className="collections-preview__title">
            <Link to={"collections/" + title.toLowerCase()}>{title}</Link>
        </h3>
        <ul className="collections-preview__items">
            {
                items.map(item =>
                    <li className="collections-preview__item" key={item.id}>
                        <ShopCollectionsPreviewItemHooks item={item}/>
                    </li>)
            }
        </ul>
    </div>
));
