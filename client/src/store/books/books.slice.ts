import { createAsyncThunk, createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { BookModel } from '@app/models/book.model';
import { RootState } from '@app/store/store';

// Тут пример с createEntityAdapter
// https://redux-toolkit.js.org/api/createEntityAdapter
const booksAdapter = createEntityAdapter<BookModel, BookModel['id']>({
    // Assume IDs are stored in a field other than `book.id` в моем случае есть id
    selectId: book => book.id,
    // Keep the "all IDs" array sorted based on book titles
    sortComparer: (a, b) => a.title.localeCompare(b.title),
});

export const fetchBooksAction = createAsyncThunk<BookModel[]>('books/fetchAll', async (_, thunkApi) => {
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
export const updateBookAsyncAction = createAsyncThunk<BookModel, BookModel>(
    'books/updateOne',
    async (book, thunkApi) => {
        const response = await Promise.resolve<BookModel>(book);
        return response;
    },
);

const initialState = booksAdapter.getInitialState({ loading: false }); // { entities: {} ids: [] loading: false }

const slice = createSlice({
    name: 'books',
    initialState,
    reducers: {
        removeBookAction: booksAdapter.removeOne,
        addBookAction: booksAdapter.addOne,
        updateBookAction: booksAdapter.updateOne,
    },
    extraReducers: builder => {
        builder.addCase(fetchBooksAction.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(fetchBooksAction.fulfilled, (state, { payload }) => {
            booksAdapter.upsertMany(state, payload);
            state.loading = false;
        });
        builder.addCase(updateBookAsyncAction.fulfilled, (state, { payload }) => {
            const { id, ...changes } = payload;
            booksAdapter.updateOne(state, { id, changes });
        });
    },
});

export default slice.reducer;

export const { removeBookAction, addBookAction, updateBookAction } = slice.actions;

export const {
    selectById: selectBookById,
    selectIds: selectBookIds,
    selectEntities: selectBookEntities,
    selectAll: selectAllBooks,
    selectTotal: selectTotalBooks,
} = booksAdapter.getSelectors<RootState>(state => state.books);

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
