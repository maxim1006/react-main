import React, { FC, memo, useEffect } from 'react';
import styles from './product-2-container.module.scss';
import cn from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import { selectProduct } from '@app/store/product/abstract/abstract-product.selectors';
import { selectAllProduct2InnerProp, selectProduct2InnerPropEntities } from '@app/store/product/2/product2.selector';
import Product from '@app/components/product/product.component';
import { setProduct2innerPropAction } from '@app/store/product/2/product2.slice';

type Product2ContainerProps = {};

const Product2Container: FC<Product2ContainerProps> = () => {
    const dispatch = useDispatch();

    const product = useSelector(selectProduct);
    const items = useSelector(selectAllProduct2InnerProp);
    const entities = useSelector(selectProduct2InnerPropEntities);

    useEffect(() => {
        // сечу setProduct1innerPropAction
        dispatch(setProduct2innerPropAction([{ id: String(Date.now()), name: 'prop2', value: 'value2' }]));
    }, [dispatch]);

    return (
        <div className={cn(styles.host, 'taProduct2Container')}>
            <Product items={items} entities={entities} {...product} />
        </div>
    );
};

export default memo(Product2Container);
