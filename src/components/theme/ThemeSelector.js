import React, {useContext} from "react";
import ThemeContext from "../../context/ThemeContext";

export default () => {
    const {value, onThemeChange} = useContext(ThemeContext);

    return (
        <select value={value} onChange={onThemeChange}>
            <option value="default">default</option>
            <option value="theme1">theme1</option>
            <option value="theme2">theme2</option>
        </select>
    );
}
