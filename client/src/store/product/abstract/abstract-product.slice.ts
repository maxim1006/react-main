import { AnyAction, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ProductStateModel, ProductTypeEnum } from '@app/models/product.model';
import { product1Reducer } from '@app/store/product/1/product1.slice';
import { product2Reducer } from '@app/store/product/2/product2.slice';
import { product1InnerPropAdapterInitialState } from '@app/store/product/1/product1.adapters';
import { product2InnerPropAdapter } from '@app/store/product/2/product2.adapters';

const initialState: ProductStateModel = {
    // тут надо добавить исходный продукт иначе не сработает action из product.container
    type: ProductTypeEnum.Product1,
    // если не засечу тут то получу ошибку относительно этих пропертей ids of undefined
    product1InnerProp: product1InnerPropAdapterInitialState,

    // type: ProductTypeEnum.Product2,
    // product2InnerProp: product2InnerPropAdapter.getInitialState(),
} as ProductStateModel;

const callSpecificProductReducer = (state: ProductStateModel, action: AnyAction) => {
    switch (state?.type) {
        case ProductTypeEnum.Product1:
            return product1Reducer(state, action);
        case ProductTypeEnum.Product2:
            return product2Reducer(state, action);
    }
};

const slice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        setProductTypeAction(state, action: PayloadAction<ProductTypeEnum>) {
            state.type = action.payload;
        },
    },
    extraReducers(builder) {
        // builder.addCase(
        //     setProductAction,
        //     (state: ProductStateModel, action: PayloadAction<ProductConfigurationModel>) => {
        //         return { ...state, ...action.payload } as ProductStateModel;
        //     }
        // );
        builder.addDefaultCase((state, action) => {
            return callSpecificProductReducer(state, action);
        });
    },
});

export const { setProductTypeAction } = slice.actions;

export const abstractProductReducer = slice.reducer;
