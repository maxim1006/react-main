import React, { memo, FC } from 'react';
import styles from './product-list.module.scss';
import cn from 'classnames';

type ProductListProps = {};

const ProductList: FC<ProductListProps> = () => {
    return (
        <div className={cn(styles.host, 'taProductList')}>
            <div className={styles.product}>
                <div className={styles.product}></div>
            </div>
        </div>
    );
};

export default memo(ProductList);
