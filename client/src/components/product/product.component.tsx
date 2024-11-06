import React, { memo, FC } from 'react';
import cn from 'classnames';
import { ProductProp, ProductTypeEnum } from '@app/models/product.model';

type ProductProps = {
    name: string;
    type: ProductTypeEnum;
    items: ProductProp[];
    entities: Record<string, ProductProp>;
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
                {Object.entries(entities).map(([key, val]) => {
                    if (val) {
                        const { value, name } = val;

                        return (
                            <div key={key}>
                                {name}: {value}
                            </div>
                        );
                    }

                    return val;
                })}
            </div>
        </div>
    );
};

export default memo(Product);
