import { Product1ConfigurationModel, Product1StateModel, ProductProp } from '@app/models/product.model';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { productPropAdapter } from '@app/store/product/1/product1.adapters';
import { setProductAction } from '@app/store/product/abstract/abstract-product.actions';

const initialState: Product1StateModel = null;

const slice = createSlice({
    name: 'product/product1',
    initialState,
    reducers: {
        setProduct1PropAction(state, action: PayloadAction<ProductProp[]>) {
            productPropAdapter.setMany(state.product1StateProp, action.payload);
        },
    },
    extraReducers: builder => {
        builder.addCase(setProductAction, (state: Product1StateModel, action) => ({
            ...state,
            ...(action.payload as Product1ConfigurationModel),
        }));
        // тут можно сделать inner state property у которой будет свой reducer
        // builder.addDefaultCase((state, action) => {
        //
        // });
    },
});

export const product1Reducer = slice.reducer;

export const { setProduct1PropAction } = slice.actions;
