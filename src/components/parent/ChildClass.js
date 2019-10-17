import React, {Component} from "react";

export class ChildClass extends Component {

    render() {
        const {string, obj, propFromRestOperator} = this.props;

        return (
            <div>
                <div tabIndex={1}>
                    string: {string} <br/>
                    obj: {JSON.stringify(obj)}
                    propFromRestOperator: {propFromRestOperator}
                </div>
            </div>
        );
    }

}
