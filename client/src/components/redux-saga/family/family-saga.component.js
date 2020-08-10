import React, { memo, useEffect } from "react";
import { useDispatch } from "react-redux";
import { getFamilyAction } from "../../../store/actions";

const FamilySagaComponent = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getFamilyAction());
    }, []);

    return <>FamilySagaComponent</>;
};

export default memo(FamilySagaComponent);
