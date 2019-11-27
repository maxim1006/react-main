import React, {Component} from "react";
import {connect} from "react-redux";
import {deleteStream, fetchStreams} from "../../store/actions";
import Stream from "./Stream";
import {Link} from "react-router-dom";

class StreamList extends Component {
    componentDidMount() {
        this.props.fetchStreams();
    }

    render() {
        const {streams} = this.props;

        return (
            <>
                <ul className="stream-list">
                    {
                        Object.entries(streams)
                            .map(([id, stream]) => {
                                return (
                                    <li
                                        key={id}
                                        className="stream-list__item"
                                    >
                                        <Stream {...stream}/>

                                        {this.renderControls(stream)}
                                    </li>
                                );
                            })
                    }
                </ul>
                <p>
                    {this.renderCreateControls()}
                </p>
            </>
        );
    }

    renderControls({userId, id}) {
        const {currentUserId, deleteStream} = this.props;

        if (userId === currentUserId) {
            return (
                <div className="stream-list__controls">
                    <Link to={`/stream/edit/${id}`}>Edit</Link>
                    <button type="button" onClick={deleteStream.bind(null, id)}>Delete</button>
                </div>
            );
        }
    }

    renderCreateControls() {
        if (this.props.auth) {
            return (
                <Link to="/stream/create">Create stream -></Link>
            );
        }
    }
}

const mapStateToProps = (state, ownProps) => ({
    streams: state.streams,
    currentUserId: state.auth.userId,
    auth: state.auth.isSignedIn,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    fetchStreams,
    deleteStream
});

export default connect(mapStateToProps, mapDispatchToProps())(StreamList);
