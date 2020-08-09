import React, { memo } from "react";
import { useDispatch } from "react-redux";
import { sagaGetUserStartAction } from "../../../store/actions";

const ReduxSagaIntroComponent = () => {
    const dispatch = useDispatch();

    return (
        <>
            <button type="button" onClick={() => dispatch(sagaGetUserStartAction())}>
                Get user
            </button>
        </>
    );
};

export default memo(ReduxSagaIntroComponent);
