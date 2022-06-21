import { memo, useCallback } from 'react';
import ShopButton from '../button/ShopButton';
import './ShopCartDropdown.scss';
import { shopToggleDropdown } from '@app/store/actions';
import { useDispatch } from 'react-redux';
import ShopCartListHooks from '../cart/cart-list/ShopCartListHooks';

export default memo(({ history }) => {
    const dispatch = useDispatch();
    const toggleDropdown = useCallback(() => dispatch(shopToggleDropdown()), [dispatch]);

    return (
        <div className='shop-cart-dropdown'>
            <div className='shop-cart-dropdown__list'>
                <ShopCartListHooks />
            </div>
            <div className='shop-cart-dropdown__button'>
                <ShopButton
                    fullWidth
                    onClick={() => {
                        history.push('/shop/checkout');
                        toggleDropdown();
                    }}
                >
                    Check out
                </ShopButton>
            </div>
        </div>
    );
});
