import React, {Component} from "react";
import {connect} from "react-redux";
import {createStream} from "../../store/actions";
import StreamForm from "./StreamForm";

class StreamCreate extends Component {
    render() {
        return (
            <StreamForm
                onSubmit={this.onSubmit}
            />
        );
    }

    onSubmit = (formValues) => {
        this.props.createStream(formValues);
    };
}


export default connect(null, {createStream})(StreamCreate);
