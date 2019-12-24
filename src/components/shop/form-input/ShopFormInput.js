import React from "react";
import "./ShopFormInput.scss";

export default ({handleChange, label, ...restProps}) => (
    <div className="shop-form-input">
        {
            label ?
                <label htmlFor={restProps.id}>{label}</label> :
                null
        }
        <input
            onChange={handleChange}
            {...restProps}
        />
    </div>
);
