import { createEntityAdapter } from '@reduxjs/toolkit';
import { ProductProp } from '@app/models/product.model';

export const product1InnerPropAdapter = createEntityAdapter<ProductProp>();

export const product1InnerPropAdapterInitialState = product1InnerPropAdapter.getInitialState();

console.log({ product1InnerPropAdapterInitialState });
