import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteStream, fetchStreams } from '../../store/actions';
import Stream from './Stream';
import ModalPortal from '../portals/modal/ModalPortal';

class StreamList extends Component {
    state = {
        streamToDelete: null,
    };

    componentDidMount() {
        this.props.fetchStreams();
    }

    render() {
        return (
            <>
                {this.renderStreamList()}
                {this.renderCreateControls()}
                {this.renderDeleteModal()}
            </>
        );
    }

    renderStreamList() {
        const { streams } = this.props;

        return (
            <ul className='stream-list'>
                {Object.entries(streams).map(([id, stream]) => {
                    return (
                        <li key={id} className='stream-list__item'>
                            <Stream {...stream} title={<Link to={`/stream/${stream.id}`}>{stream.title}</Link>} />

                            {this.renderControls(stream)}
                        </li>
                    );
                })}
            </ul>
        );
    }

    renderControls(stream) {
        const { currentUserId } = this.props;
        const { userId, id } = stream;

        if (userId === currentUserId) {
            return (
                <div className='stream-list__controls'>
                    <Link to={`/stream/edit/${id}`}>Edit</Link>
                    <button type='button' onClick={this.showDeleteModal.bind(this, stream)}>
                        Delete
                    </button>
                </div>
            );
        }
    }

    renderCreateControls() {
        if (this.props.auth) {
            return (
                <p>
                    <Link to='/stream/create'>Create stream -&gt;</Link>
                </p>
            );
        }
    }

    renderDeleteModal() {
        const { streamToDelete: stream } = this.state;

        if (stream) {
            const controls = (
                <>
                    <button type='button' onClick={this.onDelete.bind(this, stream)}>
                        Delete
                    </button>
                    <button type='button' onClick={this.hideDeleteModel}>
                        Cancel
                    </button>
                </>
            );

            return <ModalPortal title='Are u sure u wanna delete this stream?' controls={controls} />;
        }
    }

    onDelete = (stream, event) => {
        // console.log(stream);
        // так могу достать эвент при bind(this, ...)
        // console.log(event.target);

        const { deleteStream } = this.props;

        deleteStream(stream.id);

        this.hideDeleteModel();
    };

    hideDeleteModel = () => {
        this.setState({
            streamToDelete: null,
        });
    };

    showDeleteModal = stream => {
        this.setState({
            streamToDelete: stream,
        });
    };
}

const mapStateToProps = state => ({
    streams: state.streams,
    currentUserId: state.auth.userId,
    auth: state.auth.isSignedIn,
});

export default connect(mapStateToProps, {
    fetchStreams,
    deleteStream,
})(StreamList);
