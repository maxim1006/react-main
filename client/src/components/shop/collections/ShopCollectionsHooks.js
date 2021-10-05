import React from 'react';
import { useSelector } from 'react-redux';
import ShopCollectionsPreview from './preview/ShopCollectionsPreview';
import MaterialLoader from '../../loader/MaterialLoader';

export default function ShopCollectionsHooks() {
    const shopData = useSelector(state => state.shopData.data);

    return shopData ? (
        Object.values(shopData).map(item => {
            const currentItem = { ...item };
            // in Preview show 4 items
            currentItem.items = currentItem.items.slice(0, 4);

            return <ShopCollectionsPreview key={currentItem.id} {...currentItem} />;
        })
    ) : (
        <MaterialLoader />
    );
}
