import { createAction } from '@reduxjs/toolkit';
import { ProductConfigurationModel, ProductResettableKeys } from '@app/models/product.model';

export const setProductAction = createAction<ProductConfigurationModel>('product/setProductAction');
export const resetProductAction = createAction<ProductResettableKeys>('product/resetProductAction');
