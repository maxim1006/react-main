import React, {useContext} from 'react';
import LanguageContext from "../../../context/LanguageContext";

export default () => {
    const language = useContext(LanguageContext);
    const label = language === "en" ? "Name" : "Имя";

    return (
        <p>
            <label htmlFor="contextFieldName">{label}</label>
            <input type="text" id="contextFieldName"/>
        </p>
    );
}
