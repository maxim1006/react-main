import {Component} from 'react';

// constructor
// render
// componentDidMount

export class LifecycleHooksComponent extends Component {
    constructor(props) {
        super(props);
        console.log("constructor");
    }

    // The componentDidMount() method runs after the component output has been rendered to the
    // DOM. This is a good place to set up a timer
    componentDidMount() {
        console.log("componentDidMount");
    }

    // clear everything
    componentWillUnmount() {
        console.log("componentWillUnmount");
    }

    render() {
        console.log("render");

        return "Lifecycle hooks";
    }
}
