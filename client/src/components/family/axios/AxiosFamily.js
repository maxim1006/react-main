import React, { memo } from "react";
import MaterialLoader from "../../loader/MaterialLoader";
import useGetRequest from "../../hooks/useGetRequest";

export default memo(() => {
    const family = useGetRequest({ url: "family" });

    return family ? (
        <ul>
            {family.map(({ name, id, age }) => (
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
