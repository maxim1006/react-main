import { Link } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { ReactComponent as LogoIcon } from '../../../assets/icons/crown.svg';
import { ReactComponent as CartIcon } from '../../../assets/icons/shopping-bag.svg';
import { auth } from "@app/firebase/firebase.utils";
import './ShopHeader.scss';
import { connect } from 'react-redux';
import { shopToggleDropdown } from "@app/store/actions";
import MaterialLoader from '../../loader/MaterialLoader';
import { selectShopCartQuantity, selectShopCartVisibleDropdown } from '../../../store/selectors';
import { selectShopCurrentUser } from "@app/store/selectors";
import ShopCartDropdownHooks from '../cart-dropdown/ShopCartDropdownHooks';

const ShopHeader = ({ shopToggleDropdown, visibleCartDropdown, user, cartQuantity }) => {
    return (
        <div className='shop-header'>
            <div className='shop-header__title'>Shop</div>
            <LogoIcon className='shop-header__logo' />

            <div className='shop-header__sign'>
                {user === null ? (
                    <MaterialLoader />
                ) : user ? (
                    <>
                        <a
                            href='/'
                            onClick={e => {
                                e.preventDefault();
                                auth.signOut();
                            }}
                        >
                            Sign Out
                        </a>
                    </>
                ) : (
                    <Link to='/shop/sign'>Sign In</Link>
                )}
            </div>

            <div className='shop-header__cart'>
                <span className='shop-header__cart-count'>{cartQuantity}</span>
                <CartIcon className='shop-header__cart-icon' onClick={shopToggleDropdown} />
                {visibleCartDropdown && <ShopCartDropdownHooks />}
            </div>

            <div className='shop-header__user'>{user.displayName}</div>
        </div>
    );
};

// могу записать так, но так как селекторы повторяются удобнее использовать createStructuredSelector
// const mapStateToProps = (state, ownProps) => ({
//     visibleCartDropdown: selectShopCartVisibleDropdown(state),
//     // работа селекторов будет заметна если раскоментировать нижнюю строку, тогда пересчет будет проходить каждый раз когда
//     // апдейтится стор, вместо того чтобы происходить когда нужна только часть стора отвечающая за cart
//     cartQuantity: selectShopCartQuantity(state),
//     // cartQuantity: Object.values(state.shopCart.cartItems).reduce((acc, {quantity}) => {console.log(123);return acc + quantity}, 0),
//     user: selectShopCurrentUser(state)
// });

const mapStateToProps = createStructuredSelector({
    visibleCartDropdown: selectShopCartVisibleDropdown,
    cartQuantity: selectShopCartQuantity,
    user: selectShopCurrentUser,
});

export default connect(mapStateToProps, {
    shopToggleDropdown,
})(ShopHeader);
