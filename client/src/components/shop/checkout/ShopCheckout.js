import { memo, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectShopCartItems, selectShopCartTotal } from '../../../store/selectors';
import './ShopCheckout.scss';
import ShopCheckoutItem from './item/ShopCheckoutItem';
import { shopAddCartItem, shopClearCartItems, shopRemoveCartItem, shopRemoveCartItems } from '../../../store/actions';
import ShopStripeButton from '../stripe/ShopStripeButton';
import ShopButton from '../button/ShopButton';

export default memo(() => {
    // селекторы использую чтобы предотвратить пересчет в них стейта, а то будет каждый раз при ренедеренге компоненты пересчитываться логика в селекторе, а так только когда касается этого стейта
    const shopTotal = useSelector(selectShopCartTotal);
    const cartItems = useSelector(selectShopCartItems);
    const dispatch = useDispatch();

    const onRemove = useCallback(item => () => dispatch(shopRemoveCartItems(item)), [dispatch]);

    const onRemoveItem = useCallback(item => () => dispatch(shopRemoveCartItem(item)), [dispatch]);

    const onAddItem = useCallback(item => () => dispatch(shopAddCartItem(item)), [dispatch]);

    const onClearCart = useCallback(() => dispatch(shopClearCartItems()), [dispatch]);

    return (
        <div className='shop-checkout'>
            <div className='shop-checkout__header'>
                <div className='shop-checkout__header-item'>Product</div>
                <div className='shop-checkout__header-item'>Description</div>
                <div className='shop-checkout__header-item'>Quantity</div>
                <div className='shop-checkout__header-item'>Price</div>
                <div className='shop-checkout__header-item'>Remove</div>
            </div>
            <div className='shop-checkout__items'>
                {Object.entries(cartItems).map(([id, item]) => {
                    return (
                        <ShopCheckoutItem
                            key={id}
                            {...item}
                            onRemove={onRemove(item)}
                            onRemoveItem={onRemoveItem(item)}
                            onAddItem={onAddItem(item)}
                        />
                    );
                })}
            </div>
            <div className='shop-checkout__info'>
                *Please use following info for payments testing*
                <br />
                4242 4242 4242 4242 Exp.: 01/20 CVV: 123
            </div>
            <div className='shop-checkout__info'>
                <ShopButton onClick={onClearCart}>Clear cart</ShopButton>
            </div>
            <div className='shop-checkout__total'>
                TOTAL:
                {shopTotal}
                <ShopStripeButton price={shopTotal} />
            </div>
        </div>
    );
});
