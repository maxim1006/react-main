import React, { Component } from "react";

export class ChildClass extends Component {
    render() {
        const { string, obj, propFromRestOperator, truthy } = this.props;

        return (
            <div>
                <div tabIndex={1}>
                    string: {string} <br />
                    obj: {JSON.stringify(obj)}
                    <br />
                    propFromRestOperator: {propFromRestOperator}
                    <br />
                    truthy: {`${truthy}`}
                </div>
            </div>
        );
    }
}
