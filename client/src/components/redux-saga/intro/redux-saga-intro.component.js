import React, { memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { sagaGetUserStartAction } from "../../../store/actions";
import MaterialLoaderComponent from "../../loader/MaterialLoader";

const ReduxSagaIntroComponent = () => {
    const dispatch = useDispatch();
    const users = useSelector(state => state.saga);

    return (
        <>
            <button type="button" onClick={() => dispatch(sagaGetUserStartAction())}>
                Get user
            </button>
            {users.loading && <MaterialLoaderComponent />}
            {!users.loading &&
                users?.entities?.users?.length &&
                users?.entities?.users.map(({ id, name }) => {
                    return <div key={id}>{name}</div>;
                })}
        </>
    );
};

export default memo(ReduxSagaIntroComponent);
