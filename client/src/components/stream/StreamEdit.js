import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { editStream, fetchStream } from '../../store/actions';
import StreamForm from './StreamForm';

class StreamEdit extends Component {
    componentDidMount() {
        // все что внутри Router получает в пропсы параметры от роутинга: history, location, match
        this.props.fetchStream(this.props.match.params.id);
    }

    render() {
        const { stream } = this.props;
        // initialValues - это спец свойство redux form, сразу подставятся в инпуты
        // initialValues - это объект и в данном случае он равен stream

        if (stream) {
            const { title, description } = stream;

            return (
                <>
                    <h3>Edit stream</h3>
                    <StreamForm initialValues={{ title, description }} onSubmit={this.onSubmit.bind(this)} />

                    <p>
                        <Link to='/stream'>Go to stream list -&gt;</Link>
                    </p>
                </>
            );
        }
        return <div>...Loading</div>;
    }

    onSubmit = formValues => {
        this.props.editStream(this.props.match.params.id, formValues);
    };
}

const mapStateToProps = (state, ownProps) => ({
    stream: state.streams[ownProps.match.params.id],
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    fetchStream: id => {
        dispatch(fetchStream(id));
    },
    editStream: (...args) => {
        dispatch(editStream(...args));
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(StreamEdit);
