import React, {memo, useState} from "react";
import useGetRequest from "../useGetRequest";
import MaterialLoader from "../../loader/MaterialLoader";

export default memo(() => {
    const [searchValue, setSearchValue] = useState("");
    const [filteredSearchList, setFilteredSearchList] = useState([]);
    const familyData = useGetRequest({
        url: "/family",
        cb: (data) => {setFilteredSearchList(data)}
    });

    let filteredFamilyList = [];

    const onSearch = (e) => {
        const value = e.target.value;

        filteredFamilyList = familyData.filter(({name}) => {
            return name.toLowerCase().indexOf(value.trim().toLowerCase()) !== -1;
        });

        setFilteredSearchList(filteredFamilyList);
        setSearchValue(value);
    };

    return (
        <>
            <input type="text" value={searchValue} onChange={onSearch}/>
            {familyData ?
                filteredSearchList
                    .map(({name, age, occupation, id}) => (<div key={id}>{name} {age} {occupation}</div>)) :
                <MaterialLoader/>}
        </>
    );
});
