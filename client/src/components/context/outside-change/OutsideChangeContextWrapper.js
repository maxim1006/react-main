import React, {memo, useState} from "react";
import OutsideChangeContext from "../../../context/OutsideChangeContext";
import OutsideChangeContextInner from "./OutsideChangeContextInner";

export default memo(() => {
    const [contextValue, setContextValue] = useState(null);

    const setValue = (event) => {
        setContextValue(event.target.value)
    };

    return (
        <>
            <OutsideChangeContext.Provider value={{value: contextValue, setValue}}>
                <OutsideChangeContextInner/>
            </OutsideChangeContext.Provider>
        </>
    );

});
