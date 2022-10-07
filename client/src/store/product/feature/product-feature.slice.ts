import { ProductFeatureStateModel } from '@app/models/product.model';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: ProductFeatureStateModel = null;

const slice = createSlice({
    name: 'product/feature',
    initialState,
    reducers: {
        setProductFeatureNameAction(state, action: PayloadAction<string>) {
            state.name = action.payload;
        },
    },
});

export const productFeatureReducer = slice.reducer;

export const { setProductFeatureNameAction } = slice.actions;
