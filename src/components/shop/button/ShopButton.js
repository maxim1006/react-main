import React from "react";
import "./ShopButton.scss";

// ...restProps очень крутое применениме тут, так как провайдит к примеру onClick на родительском ShopButton
export default ({children, styleClass="", ...restProps}) => (
    <button className={`shop-button ${styleClass}`} {...restProps}>
        {children}
    </button>
);
