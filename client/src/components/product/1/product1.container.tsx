import React, { memo, FC, useEffect } from 'react';
import styles from './product-1-container.module.scss';
import cn from 'classnames';
import Product from '@app/components/product/product.component';
import { useDispatch, useSelector } from 'react-redux';
import { selectProduct } from '@app/store/product/abstract/abstract-product.selectors';
import { selectAllProduct1InnerProp, selectProduct1InnerPropEntities } from '@app/store/product/1/product1.selector';
import { setProduct1innerPropAction, setProduct1PropAction } from '@app/store/product/1/product1.slice';
import { setProductFeatureNameAction } from '@app/store/product/feature/product-feature.slice';

type Product1ContainerProps = {};

const Product1Container: FC<Product1ContainerProps> = () => {
    const dispatch = useDispatch();

    const product = useSelector(selectProduct);
    const items = useSelector(selectAllProduct1InnerProp);
    const entities = useSelector(selectProduct1InnerPropEntities);

    useEffect(() => {
        // сечу setProduct1innerPropAction
        dispatch(setProduct1innerPropAction([{ id: String(Date.now()), name: 'prop1', value: 'value1' }]));
        dispatch(setProduct1PropAction('Product1Prop'));
        dispatch(setProductFeatureNameAction('productFeatureName'));
    }, [dispatch]);

    console.log({
        product,
        items,
        entities,
    });

    return (
        <div className={cn(styles.host, 'taProduct1Container')}>
            <Product items={items} entities={entities} {...product} />
        </div>
    );
};

export default memo(Product1Container);
