import { ProductStateModel } from '@app/store/product/abstract/abstract-product.selectors';
import { AnyAction, createSlice } from '@reduxjs/toolkit';
import { ProductTypeEnum } from '@app/models/product.model';
import { product1Reducer } from '@app/store/product/1/product1.slice';

const initialState: ProductStateModel = {} as ProductStateModel;

const callSpecificProductReducer = (state: ProductStateModel, action: AnyAction) => {
    switch (state?.type) {
        case ProductTypeEnum.Product1:
            return product1Reducer(state, action);
        // case ProductTypeEnum.Product2:
        //     return product2Reducer(state, action);
    }
};

const slice = createSlice({
    name: 'product',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addDefaultCase((state, action) => {
            return callSpecificProductReducer(state, action);
        });
    },
});

export const abstractProductReducer = slice.reducer;
