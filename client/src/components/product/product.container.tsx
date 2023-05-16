import React, { FC, memo, useCallback, useEffect } from 'react';
import styles from './product-container.module.scss';
import cn from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import { ProductTypeEnum } from '@app/models/product.model';
import { setProductTypeAction } from '@app/store/product/abstract/abstract-product.slice';
import Product1Container from '@app/components/product/1/product1.container';
import { selectProduct } from '@app/store/product/abstract/abstract-product.selectors';
import Product2Container from '@app/components/product/2/product2.container';
import { setProductAction } from '@app/store/product/abstract/abstract-product.actions';

type ProductContainerProps = {};

const ProductContainer: FC<ProductContainerProps> = () => {
    const dispatch = useDispatch();

    const product = useSelector(selectProduct);

    // одновременно не могу оба продукта брать - будет ошибко
    // const allProduct1InnerPropItems = useSelector(selectAllProduct1InnerProp);
    // const allProduct2InnerPropItems = useSelector(selectAllProduct2InnerProp);

    useEffect(() => {
        // надо обязательно засетить хоть 1 продукт иначе не выйдет сетить конкретику продукта во втором экшене
        dispatch(setProductTypeAction(ProductTypeEnum.Product1));
    }, [dispatch]);

    const changeToProduct2Click = useCallback(() => {
        dispatch(setProductAction({ id: '2', name: 'Max', type: ProductTypeEnum.Product2, version: 2 }));
    }, [dispatch]);

    const setProduct1 = useCallback(() => {
        dispatch(setProductAction({ id: '1', name: 'Max', type: ProductTypeEnum.Product1, version: 2 }));
    }, [dispatch]);

    return (
        <div className={cn(styles.host, 'taProductContainer')}>
            <button type='button' onClick={setProduct1}>
                Set product1
            </button>

            <button type='button' onClick={changeToProduct2Click}>
                Set product2
            </button>

            {product.type === ProductTypeEnum.Product1 ? <Product1Container /> : <Product2Container />}
        </div>
    );
};

export default memo(ProductContainer);
