import { createAction } from '@reduxjs/toolkit';
import { ProductConfigurationModel, ProductResettableKeys } from '@app/models/product.model';

// это общие экшены, их могу использовать в  extraReducers(builder) { builder.addCase(
export const setProductAction = createAction<ProductConfigurationModel>('product/setProductAction');
export const resetProductAction = createAction<ProductResettableKeys>('product/resetProductAction');
