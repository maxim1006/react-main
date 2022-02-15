import { Component } from 'react';
import { connect } from 'react-redux';
import Song from './Song';
import { selectSong } from '@app/store/actions';
import SongDetails from './SongDetails';

class SongList extends Component {
    // проперти автоматом биндятся
    // в this.props добавится объект mapStateToProps()
    render() {
        // console.log(this.props);
        return (
            <>
                <h3>Songs:</h3>
                <ul className='song-list'>{this.getSongsList()}</ul>
                <SongDetails />
            </>
        );
    }

    getSongsList() {
        const { songs, selectedSong, selectSong } = this.props;

        return songs.map((song, index) => {
            const isSelected = selectedSong ? selectedSong.song.title === song.title : null;

            return (
                <li key={index}>
                    <Song {...song} selected={isSelected} onSelect={selectSong.bind(this, song)} />
                </li>
            );
        });
    }
}

// вызывается с полным стейтом
const mapStateToProps = (state, ownProps) => ({
    songs: state.songs,
    selectedSong: state.selectedSong,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    selectSong: song => {
        // console.log(ownProps);
        dispatch(selectSong(song));
    },
});

// могу забиндить на возвращаемый эвент из Song сразу action, для этого надо вернуть объект
// export default connect(mapStateToProps, {selectSong})(SongList);

// могу предобработать mapDispatchToProps с помощью доп функций, selectSong также попадет в пропсы,
// но при этом не вызовет action
export default connect(mapStateToProps, mapDispatchToProps)(SongList);
