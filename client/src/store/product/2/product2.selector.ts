import { Product2StateModel, ProductTypeEnum } from '@app/models/product.model';
import { RootState } from '@app/store/store';
import { selectProduct } from '@app/store/product/abstract/abstract-product.selectors';
import { product2InnerPropAdapter } from '@app/store/product/2/product2.adapters';

// для того чтобы вытащить конкретный тип продукта нужна обертка
export const product2Selector = <T>(selector: (state: Product2StateModel) => T): ((state: RootState) => T) => {
    return (state: RootState) => {
        const product = selectProduct(state);
        if (product?.type === ProductTypeEnum.Product2) {
            return selector(state.product as Product2StateModel);
        } else {
            throw Error('Incorrect product type');
        }
    };
};

export const { selectAll: selectAllProduct2InnerProp, selectEntities: selectProduct2InnerPropEntities } =
    product2InnerPropAdapter.getSelectors<RootState>(state => (state.product as Product2StateModel).product2InnerProp);

// вытаскиваю данные из самого продукта
export const selectProduct2Name = product2Selector(product2 => product2.name);
export const selectProduct2Prop = product2Selector(product2 => product2.prop);
