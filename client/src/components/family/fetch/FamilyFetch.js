import React, { memo } from "react";
import MaterialLoader from "../../loader/MaterialLoader";
import useFetch from "../../hooks/useFetch";

export default memo(() => {
    const family = useFetch({ url: "http://localhost:3001/api/family" });

    return family ? (
        <ul>
            {family.map(({ name, age, id }) => (
                <li key={id}>
                    {name}
:{age}
                </li>
            ))}
        </ul>
    ) : (
        <MaterialLoader />
    );
});
