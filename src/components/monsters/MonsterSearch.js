import React from "react";
import "./MonsterSearch.scss"

export default ({value, onChange}) => (
    <div className="monster-search">
        <input
            type="text"
            className="monster-search__input"
            value={value}
            onChange={onChange} type="text"
            placeholder="find..."
        />
    </div>
);
