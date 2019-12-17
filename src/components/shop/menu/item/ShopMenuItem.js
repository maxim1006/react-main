import React from "react";
import "./ShopMenuItem.scss";
import {withRouter} from "react-router-dom";

const MenuItem =  ({title, subtitle = "Shop now", image, history, match, linkUrl}) => {
    const onClick = () => {
        history.push(`${match.url}${linkUrl}`);
    };

    return (
        <div className="shop-menu-item"
             onClick={onClick}
             style={{backgroundImage: `url(${image})`}}
        >
            <div className="shop-menu-item__title">
                {title}
            </div>
            <div className="shop-menu-item__subtitle">
                {subtitle}
            </div>
        </div>
    );
};

// Так как Роутер сетит проперти только компонентам в <Route то остальным прокидываю инфо о роутере через withRouter
export default withRouter(MenuItem);
