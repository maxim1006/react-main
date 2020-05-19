import React, { memo, useCallback, useState } from "react";
import useGetRequest from "../useGetRequest";
import MaterialLoader from "../../loader/MaterialLoader";

export default memo(() => {
    const [searchValue, setSearchValue] = useState("");
    const [filteredSearchList, setFilteredSearchList] = useState([]);

    // тут использую useEffect внутри (как componentDidMount)
    const familyData = useGetRequest({
        url: "/family",
        cb: data => {
            setFilteredSearchList(data);
        }
    });

    let filteredFamilyList = [];

    const onSearch = useCallback(
        e => {
            const { value } = e.target;

            filteredFamilyList = familyData.filter(({ name }) => {
                return (
                    name.toLowerCase().indexOf(value.trim().toLowerCase()) !==
                    -1
                );
            });

            setFilteredSearchList(filteredFamilyList);
            setSearchValue(value);
        },
        [familyData]
    );

    return (
        <>
            <input type="text" value={searchValue} onChange={onSearch} />
            {familyData ? (
                filteredSearchList.map(({ name, age, occupation, id }) => (
                    <div key={id}>
                        {name} {age} {occupation}
                    </div>
                ))
            ) : (
                <MaterialLoader />
            )}
        </>
    );
});
