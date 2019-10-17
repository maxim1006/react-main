import React from "react";

export default function ChildFunction({string, obj, propFromRestOperator, onClick}) {
    return (
        <div onPointerUp={onClick}>
            string: {string} <br/>
            obj: {JSON.stringify(obj)}
            propFromRestOperator: {propFromRestOperator}
        </div>
    );
}

ChildFunction.defaultProps = {
    string: "default"
};
