import { createAsyncThunk, createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { BookModel } from '@app/models/book.model';
import { RtRootState } from '@app/redux-toolkit/rt-configureStore';

// Тут пример с createEntityAdapter
// https://redux-toolkit.js.org/api/createEntityAdapter
const booksAdapter = createEntityAdapter<BookModel>({
    // Assume IDs are stored in a field other than `book.id` в моем случае есть id
    // selectId: (book) => book.bookId,
    // Keep the "all IDs" array sorted based on book titles
    sortComparer: (a, b) => a.title.localeCompare(b.title),
});

export const rtFetchBooksAction = createAsyncThunk<BookModel[]>('books/fetchAll', async (_, thunkApi) => {
    try {
        const result = await Promise.resolve<BookModel[]>([
            {
                id: '1',
                title: 'title1',
            },
            {
                id: '2',
                title: 'title2',
            },
            {
                id: '3',
                title: 'title3',
            },
        ]);

        return result;
    } catch (e) {
        return thunkApi.rejectWithValue(e);
    }
});

// пример с асинхронным апдейтом, есть с синхронным, первый аргумент в дженерике что вернет, второй что на вход
export const rtUpdateBookAsyncAction = createAsyncThunk<BookModel, BookModel>(
    'books/updateOne',
    async (book, thunkApi) => {
        const response = await Promise.resolve<BookModel>(book);
        return response;
    }
);

const initialState = booksAdapter.getInitialState({ loading: false }); // { entities: {} ids: [] loading: false }

const slice = createSlice({
    name: 'books',
    initialState,
    reducers: {
        rtRemoveBookAction: booksAdapter.removeOne,
        rtAddBookAction: booksAdapter.addOne,
        rtUpdateBookAction: booksAdapter.updateOne,
    },
    extraReducers: builder => {
        builder.addCase(rtFetchBooksAction.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(rtFetchBooksAction.fulfilled, (state, { payload }) => {
            booksAdapter.upsertMany(state, payload);
            state.loading = false;
        });
        builder.addCase(rtUpdateBookAsyncAction.fulfilled, (state, { payload }) => {
            const { id, ...changes } = payload;
            booksAdapter.updateOne(state, { id, changes });
        });
    },
});

const reducer = slice.reducer;
export default reducer;

export const { rtRemoveBookAction, rtAddBookAction, rtUpdateBookAction } = slice.actions;

export const {
    selectById: selectBookById,
    selectIds: selectBookIds,
    selectEntities: selectBookEntities,
    selectAll: selectAllBooks,
    selectTotal: selectTotalBooks,
} = booksAdapter.getSelectors<RtRootState>(state => state.books);

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