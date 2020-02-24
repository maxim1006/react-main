import React, {memo} from "react";
import ContextTest from "../components/context/test/ContextTest";
import Component from "../components/component/Component";
import OutsideChangeContextWrapper from "../components/context/outside-change/OutsideChangeContextWrapper";

export default memo(() => {
    return (
        <>
            <Component title="OusideChange">
                <OutsideChangeContextWrapper />
            </Component>

            <Component title="Language example">
                <ContextTest/>
            </Component>
        </>
    );
});
