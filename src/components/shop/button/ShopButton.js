import React from "react";
import "./ShopButton.scss";

export default ({children, ...restProps}) => (
    <button className="shop-button" {...restProps}>
        {children}
    </button>
);
