import React from "react";
import "./ShopMenu.scss";
import ShopMenuItem from "./item/ShopMenuItem";

export default ({items}) => items ?
    <div className="shop-menu">
        {
            items.map(({id, ...rest}) => <ShopMenuItem key={id} {...rest}/>)
        }
    </div> :
    "No shop menu items";
