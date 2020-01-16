import React, {Component} from "react";
import {connect} from "react-redux";
import {createStream} from "../../store/actions";
import StreamForm from "./StreamForm";
import {Link} from "react-router-dom";

class StreamCreate extends Component {
    render() {
        return (
            <>
                <StreamForm
                    onSubmit={this.onSubmit}
                />

                <p>
                    <Link to="/stream">Go to stream list -></Link>
                </p>
            </>
        );
    }

    onSubmit = (formValues) => {
        this.props.createStream(formValues);
    };
}


export default connect(null, {createStream})(StreamCreate);
