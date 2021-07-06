import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { createStream } from '../../store/actions';
import StreamForm from './StreamForm';

class StreamCreate extends Component {
    render() {
        return (
            <>
                <StreamForm onSubmit={this.onSubmit} />

                <p>
                    <Link to="/stream">Go to stream list -&gt;</Link>
                </p>
            </>
        );
    }

    onSubmit = formValues => {
        this.props.createStream(formValues);
    };
}

export default connect(null, { createStream })(StreamCreate);
