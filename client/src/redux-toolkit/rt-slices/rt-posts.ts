import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk, RootState } from '../rt-configureStore';
import customAxios from '../../common/api/axios';
import { createSelector } from 'reselect';
import { PostModel } from '@app/models/posts.model';

interface PostsStateModel {
    loading: boolean;
    entities: PostModel[];
    error?: Error;
}

const initialState: PostsStateModel = {
    loading: false,
    entities: [],
};

// 2ой способ задания thunk должен указать тут чтобы не ругался тс с последовательностью зависимостей
// thunks redux toolkit не умеет поэтому ручками пишем (хорошие новости что включены из коробки)
export const rtFetchPostsAction1 = createAsyncThunk('posts/fetchAll', async (_, thunkApi) => {
    try {
        const { data: posts } = await customAxios.get<PostModel[]>('https://jsonplaceholder.typicode.com/posts');
        return posts;
    } catch (e) {
        return thunkApi.rejectWithValue(e);
    }
});

const rtPostsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        fetchPostsStart(state) {
            state.loading = true;
        },
        fetchPostsSuccess(state, { payload }: PayloadAction<PostModel[]>) {
            state.entities = payload;
            state.loading = false;
        },
        fetchPostsError(state, { payload }: PayloadAction<Error>) {
            state.error = payload;
            state.loading = false;
        },
    },
    extraReducers: {
        [rtFetchPostsAction1.pending.type]: (state, { payload }: PayloadAction<Error>) => {
            state.error = payload;
            state.loading = true;
        },
        [rtFetchPostsAction1.fulfilled.type]: (state, { payload }: PayloadAction<PostModel[]>) => {
            state.entities = payload;
            state.loading = false;
        },
        [rtFetchPostsAction1.rejected.type]: (state, { payload }: PayloadAction<Error>) => {
            state.error = payload;
            state.loading = false;
        },
    },
});

export const { fetchPostsSuccess, fetchPostsError, fetchPostsStart } = rtPostsSlice.actions;

export default rtPostsSlice.reducer;

// selectors
export const selectRtPosts = (state: RootState): PostsStateModel => state.posts;

// пример селектора если нужно его именно по типу заиспользовать чтобы не проверять на тип в разных селекторах
// export const testProductSelector = <T>(selector: (state: TestProductStateModel) => T): ((state: RootState) => T) => {
//     return (state: RootState) => {
//         const product = selectProduct(state);
//         if (product?.type === ProductTypeEnum.TEST) {
//             return selector(state.product);
//         } else {
//             throw Error('Incorrect product type');
//         }
//     };
// };
// export const selectTestProp = testProductSelector(testProduct => testProduct.prop);

export const makeSelectRtPostsByTitle = () =>
    createSelector([selectRtPosts, (_: RootState, title: string) => title], (posts, title) =>
        posts.entities?.filter(i => i.title.includes(title))
    );

// thunks redux toolkit не умеет поэтому ручками пишем (хорошие новости что включены из коробки)
export const rtFetchPostsAction = (): AppThunk<Promise<PostModel[] | never>> => async (dispatch, getState) => {
    dispatch(fetchPostsStart());
    // console.log(getState());
    try {
        const { data: posts } = await customAxios.get<PostModel[]>('https://jsonplaceholder.typicode.com/posts');
        dispatch(fetchPostsSuccess(posts));

        return posts;
    } catch (error) {
        if (error instanceof Error) {
            dispatch(fetchPostsError(error));
        }
        console.error('error ', error);
        throw error;
    }
};

// createAPI https://redux-toolkit.js.org/rtk-query/api/createApi
