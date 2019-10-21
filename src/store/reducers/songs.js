export const songsReducer = () => [
    {title: "Imagine dragons", duration: "4:05", likes: 100},
    {title: "Animal instinct", duration: "4:13", likes: 110},
    {title: "Daemons", duration: "3:45", likes: 120},
    {title: "Radioactive", duration: "1:45", likes: 130},
];



const selectedSongReducerInitialState = null;

export const selectedSongReducer = (state = selectedSongReducerInitialState, action) => {
    switch (action.type) {
        case 'SELECT_SONG': {
            return action.payload;
        }

        default: {
            return state;
        }
    }
};
