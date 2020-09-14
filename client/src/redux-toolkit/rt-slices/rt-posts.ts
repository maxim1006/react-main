import { CaseReducer, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PostModel } from '../models/posts.model';
import { RtAppThunk, RtRootState } from '../rt-configureStore';
import customAxios from '../../common/api/axios';

interface PostsStateModel {
    loading: boolean;
    entities: PostModel[];
    error?: Error;
}

const initialState: PostsStateModel = {
    loading: false,
    entities: []
};

const rtPostsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        fetchPostsSuccess(state, { payload }: PayloadAction<PostModel[]>) {
            state.entities = payload;
        },
        fetchPostsError(state, { payload }: PayloadAction<Error>) {
            state.error = payload;
        }
    }
});

export const { fetchPostsSuccess, fetchPostsError } = rtPostsSlice.actions;

export default rtPostsSlice.reducer;

// thunks redux toolkit не умеет поэтому ручками пишем (хорошие новости что включены из коробки)
export const rtFetchPostsAction = (): RtAppThunk => async (dispatch, getState) => {
    // console.log(getState());
    try {
        const { data: posts } = await customAxios.get('https://jsonplaceholder.typicode.com/posts');
        dispatch(fetchPostsSuccess(posts));

        return posts;
    } catch (error) {
        dispatch(fetchPostsError(error));
        console.error('error ', error);
    }
};
