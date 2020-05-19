import { Component } from "react";

/*
Так как этот компонент зависит только от входящего свойства prop, но при этом перерендериваться будет каждый раз когда
изменится стейт у родителя, чтобы этого избежать говорю ему перерендериваться только когда изменится входящий prop
Теперь render() будет вызываться только когда у этого компонента изменится this.props.prop.
*/
export class LifecycleChild extends Component {
    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return nextProps.prop !== this.props.prop;
    }

    render() {
        console.log("LifecycleChild rendered");

        return "LifecycleChild";
    }
}
