import { RootState } from '@app/store/store';
import { Product1StateModel, Product2StateModel } from '@app/models/product.model';

export type ProductStateModel = Product1StateModel | Product2StateModel;

export const selectProduct: (state: RootState) => ProductStateModel = (state: RootState) => state.product;

export const selectType = (state: RootState) => selectProduct(state).type;

export const selectOfferingId = (state: RootState) => selectProduct(state).id;
