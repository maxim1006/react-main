import { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchStream } from '@app/store/actions';

class StreamShow extends Component {
    componentDidMount() {
        const { fetchStream, match } = this.props;

        fetchStream(match.params.id);
    }

    render() {
        const { stream } = this.props;

        if (stream) {
            return (
                <>
                    <h3>Stream show</h3>
                    <p>
                        Stream title:
                        {stream.title}
                    </p>
                    <p>
                        Stream description:
                        {stream.description}
                    </p>
                    <Link to='/stream'>Go to stream list</Link>
                </>
            );
        }
        return <div>...Loading</div>;
    }
}

const mapStateToProps = (state, ownProps) => ({
    stream: state.streams[ownProps.match.params.id],
});

export default connect(mapStateToProps, { fetchStream })(StreamShow);
