import React from "react";

export default ({onChange, value}) => (
    <select value={value} onChange={onChange}>
        <option value="default">default</option>
        <option value="theme1">theme1</option>
        <option value="theme2">theme2</option>
    </select>
)
