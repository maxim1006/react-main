import React, { memo, useContext } from "react";
import OutsideChangeContext from "../../../context/OutsideChangeContext";

export default memo(() => {
    const { setValue, value } = useContext(OutsideChangeContext);

    return (
        <>
            Context value: {JSON.stringify(value)}
;
<select name="outsideContextSelect" onChange={setValue}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
            </select>
        </>
    );
});
