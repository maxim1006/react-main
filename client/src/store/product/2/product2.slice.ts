import { Product2StateModel, ProductProp } from '@app/models/product.model';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { productFeatureReducer } from '@app/store/product/feature/product-feature.slice';
import { product2InnerPropAdapter } from '@app/store/product/2/product2.adapters';

const initialState: Product2StateModel = null!;

const slice = createSlice({
    name: 'product/product2',
    initialState,
    reducers: {
        setProduct2innerPropAction(state, action: PayloadAction<ProductProp[]>) {
            product2InnerPropAdapter.setMany(state.product2InnerProp, action.payload);
        },
    },
    extraReducers: builder => {
        // тут можно сделать inner state property у которой будет свой reducer
        builder.addDefaultCase((state, action) => {
            productFeatureReducer(state, action);
        });
    },
});

export const product2Reducer = slice.reducer;

export const { setProduct2innerPropAction } = slice.actions;
