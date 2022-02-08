import { connect } from 'react-redux';

function SongDetails({ selectedSong }) {
    if (selectedSong) {
        const { title, duration, likes } = selectedSong.song;

        return (
            <>
                <h4>Details</h4>
                <p>
                    Title:
                    {title}
                </p>
                <p>
                    Duration:
                    {duration}
                </p>
                <p>
                    Likes:
                    {likes}
                </p>
            </>
        );
    }
    return (
        <>
            <h4>Details</h4>
            <p>No Selected song</p>
        </>
    );
}

const mapStateToProps = (state, ownProps) => ({
    selectedSong: state.selectedSong,
});

export default connect(mapStateToProps)(SongDetails);
