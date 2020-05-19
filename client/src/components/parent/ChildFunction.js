import React from "react";

export default function ChildFunction({
    string,
    obj,
    propFromRestOperator,
    onClick,
    truthy
}) {
    return (
        <div onPointerUp={onClick}>
            string: {string} <br />
            obj: {JSON.stringify(obj)}
            <br />
            propFromRestOperator: {propFromRestOperator}
            <br />
            truthy: {`${truthy}`}
        </div>
    );
}

ChildFunction.defaultProps = {
    string: "default"
};
