import { createEntityAdapter } from '@reduxjs/toolkit';
import { ProductProp } from '@app/models/product.model';

export const product2InnerPropAdapter = createEntityAdapter<ProductProp>({});
