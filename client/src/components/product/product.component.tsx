import React, { memo, FC } from 'react';
import cn from 'classnames';
import { ProductProp, ProductTypeEnum } from '@app/models/product.model';
import { Dictionary } from '@reduxjs/toolkit';

type ProductProps = {
    name: string;
    type: ProductTypeEnum;
    items: ProductProp[];
    entities: Dictionary<ProductProp>;
};

const Product: FC<ProductProps> = ({ name, type, items, entities }) => {
    return (
        <div className={cn('taProduct')}>
            <p>Name: {name}</p>
            <p>Type: {type}</p>
            <div>
                {items.map(({ name, value, id }) => (
                    <div key={id}>
                        {name}: {value}
                    </div>
                ))}
            </div>
            <div>
                {Object.entries(entities).map(([key, { value, name }]) => (
                    <div key={key}>
                        {name}: {value}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default memo(Product);
