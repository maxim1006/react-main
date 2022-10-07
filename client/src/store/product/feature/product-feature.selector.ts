import { ProductFeatureStateModel } from '@app/models/product.model';
import { RootState } from '@app/store/store';
import { selectProduct } from '@app/store/product/abstract/abstract-product.selectors';

export const productFeatureSelector = <T>(
    selector: (state: ProductFeatureStateModel) => T
): ((state: RootState) => T) => {
    return (state: RootState) => {
        const product = selectProduct(state);

        if ('productFeature' in product) {
            return selector(product.productFeature);
        } else {
            throw Error("Product type doesn't have sim");
        }
    };
};

export const selectProductFeatureName = productFeatureSelector(state => state.name);
