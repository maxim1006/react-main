import ShopMenuItem from './item/ShopMenuItem';
import StyledShopMenu from './StyledShopMenu';

export default function ShopMenu({ items }) {
    return items ? (
        <StyledShopMenu>
            {/* для примера использую стайлд компонент вместо нормального:*/
            /* <div className="shop-menu">*/}

            {items.map(({ id, ...rest }) => (
                <ShopMenuItem key={id} {...rest} />
            ))}
        </StyledShopMenu>
    ) : (
        'No shop menu items'
    );
}
