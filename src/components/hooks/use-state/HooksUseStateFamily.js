import React, {memo, useState} from "react";

export default memo(() => {
    const familyNames = ["Max", "Aliya", "Lili", "Alice"];

    const [name, setName] = useState("Max");

    const showName = () => {
        let nameIndex = familyNames.indexOf(name);
        const currentNameIndex = ++nameIndex%familyNames.length;
        setName(familyNames[currentNameIndex]);
    };

    return (
        <div className="hooks-counter">
            <button type="button" onClick={showName}>Show name</button>
            <span className="hooks-counter__value">{name}</span>
        </div>
    );
});
