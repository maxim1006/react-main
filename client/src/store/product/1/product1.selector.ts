import { Product1StateModel, ProductTypeEnum } from '@app/models/product.model';
import { RootState } from '@app/store/store';
import { selectProduct } from '@app/store/product/abstract/abstract-product.selectors';
import { product1InnerPropAdapter } from '@app/store/product/1/product1.adapters';

// для того чтобы вытащить конкретный тип продукта нужна обертка
export const product1Selector = <T>(selector: (state: Product1StateModel) => T): ((state: RootState) => T) => {
    return (state: RootState) => {
        const product = selectProduct(state);
        if (product?.type === ProductTypeEnum.Product1) {
            return selector(state.product as Product1StateModel);
        } else {
            throw Error('Incorrect product type');
        }
    };
};

export const { selectAll: selectAllProduct1InnerProp, selectEntities: selectProduct1InnerPropEntities } =
    product1InnerPropAdapter.getSelectors(product1Selector(product1 => product1.product1InnerProp));

// вытаскиваю данные из самого продукта
export const selectProduct1Name = product1Selector(product1 => product1.name);
export const selectProduct1Prop = product1Selector(product1 => product1.prop);
