import React from "react";

export default () => {
    const getData = async () => {
        const data = await import("./data.js");
        console.log(data.default);
    };

    return (
        <>
            "Example of dynamic imports from files"
            <div onClick={getData}>Get data</div>
        </>
    )
};

(async () => {
    let data = await require("./data.js");
    console.log("data from dynamic import ", data);
})();
