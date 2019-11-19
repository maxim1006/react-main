import React, {Component} from "react";
import {ChildClass} from "./ChildClass";
import ChildFunction from "./ChildFunction";

export class Parent extends Component {
    onClick = (event) => {
        console.log(event.target);
    };

    // блюр всплывет (фича реакта) из ChildClass
    onBlur = (e) => {
        console.log("e.relatedTarget ", e.relatedTarget);
        console.log("e.target ", e.target);
    };

    render() {
        const string = "Max";
        const obj = {prop: 1};
        const rest = {propFromRestOperator: "prop from rest"};

        return (
            <>
                <div onBlur={this.onBlur}>
                    <input type="text"/>
                    {/*truthy без value значит truthy=true*/}
                    <ChildClass truthy string={string} obj={obj} {...rest} />
                    <ChildFunction truthy obj={obj} {...rest} onClick={this.onClick} />
                    <div onClick={this.onClick}>Cant click on Component itself but can on node</div>
                </div>
            </>
        )
    }
}
