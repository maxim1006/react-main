import React, {Component} from "react";
import {connect} from "react-redux";
import {editStream, fetchStream} from "../../store/actions";
import StreamForm from "./StreamForm";

class StreamEdit extends Component {
    componentDidMount() {
        // все что внутри Router получает в пропсы параметры от роутинга: history, location, match
        this.props.fetchStream(this.props.match.params.id);
    }

    render() {
        const {stream} = this.props;
        // initialValues - это спец свойство redux form, сразу подставятся в инпуты
        // initialValues - это объект и в данном случае он равен stream

        if (stream) {
            return (
                <StreamForm
                    initialValues={stream}
                    onSubmit={this.onSubmit}
                />
            );
        } else {
            return (
                <div>...Loading</div>
            );
        }
    }

    onSubmit = (formValues) => {
        console.log(formValues);
        this.props.editStream(formValues);
    }
}

const mapStateToProps = (state, ownProps) => ({
    stream: state.streams[ownProps.match.params.id]
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    fetchStream: (id) => {
        dispatch(fetchStream(id));
    },
    editStream
});

export default connect(mapStateToProps, mapDispatchToProps)(StreamEdit);
