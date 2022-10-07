import { RootState } from '@app/store/store';
import { ProductStateModel } from '@app/models/product.model';

export const selectProduct: (state: RootState) => ProductStateModel = (state: RootState) => state.product;

export const selectType = (state: RootState) => selectProduct(state).type;

export const selectProductId = (state: RootState) => selectProduct(state).id;
