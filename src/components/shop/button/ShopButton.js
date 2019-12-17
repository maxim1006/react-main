import React from "react";
import "./ShopButton.scss";

export default ({children, modifiers="", ...restProps}) => (
    <button className={`shop-button ${modifiers}`} {...restProps}>
        {children}
    </button>
);
