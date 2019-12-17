import React from "react";

export default ({handleChange, label, ...restProps}) => (
    <>
        {
            label ?
                <label htmlFor={restProps.id}>{label}</label> :
                null
        }
        <input
            onChange={handleChange}
            {...restProps}
        />
    </>
);
