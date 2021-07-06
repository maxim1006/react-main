// в этом примере использую HOC и Container паттерн, все это ради примера compose
// Container обычно не рендерит ничего а прокидывает проперти в компоненту - реализация concerns separate pattern
import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import WithMaterialLoader from '../HOC/WithMaterialLoader';

// компонент только для примера
const SongsList = ({ songs }) => (
    <ul>
        {songs.map(({ title }, index) => (
            <li key={index}>{title}</li>
        ))}
    </ul>
);

const mapStateToProps = state => ({
    songs: state.songs,
});

// так трудно читать что происходит
// export default connect(mapStateToProps)(WithMaterialLoader(SongsList));

// так легче
export default compose(connect(mapStateToProps), WithMaterialLoader)(SongsList);
