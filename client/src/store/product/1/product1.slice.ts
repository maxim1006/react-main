import { Product1StateModel, ProductProp } from '@app/models/product.model';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { product1InnerPropAdapter } from '@app/store/product/1/product1.adapters';
import { productFeatureReducer } from '@app/store/product/feature/product-feature.slice';

const initialState: Product1StateModel = {} as Product1StateModel;

const slice = createSlice({
    name: 'product/product1',
    initialState,
    reducers: {
        setProduct1innerPropAction(state, action: PayloadAction<ProductProp[]>) {
            product1InnerPropAdapter.setMany(state.product1InnerProp, action.payload);
        },
    },
    extraReducers: builder => {
        // тут можно сделать inner state property у которой будет свой reducer
        builder.addDefaultCase((state, action) => {
            productFeatureReducer(state, action);
        });
    },
});

export const product1Reducer = slice.reducer;

export const { setProduct1innerPropAction } = slice.actions;
