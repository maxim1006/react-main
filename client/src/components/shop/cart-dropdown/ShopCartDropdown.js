import ShopButton from '../button/ShopButton';
import './ShopCartDropdown.scss';
import connect from 'react-redux/es/connect/connect';
import { shopToggleDropdown } from '@app/old_store/actions';
import ShopCartListHooks from '../cart/cart-list/ShopCartListHooks';

const ShopCartDropdown = ({ history, dispatch }) => {
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
                        dispatch(shopToggleDropdown());
                    }}
                >
                    Check out
                </ShopButton>
            </div>
        </div>
    );
};

// если не передаю mapDispatchToProps то connect автоматом вставляет dispatch в проперти, оставлю как альтернативу стандартному варианту
export default connect()(ShopCartDropdown);
// обычно делаю так
// export default withRouter(connect(null, {shopToggleDropdown})(ShopCartDropdown));
