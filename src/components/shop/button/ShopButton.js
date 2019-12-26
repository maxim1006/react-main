import React from "react";
import "./ShopButton.scss";

export default ({children, styleClass="", ...restProps}) => (
    <button className={`shop-button ${styleClass}`} {...restProps}>
        {children}
    </button>
);
