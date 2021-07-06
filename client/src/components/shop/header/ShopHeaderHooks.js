import React, { useCallback, useRef } from 'react';
// так импорчу свг
import { Link } from 'react-router-dom';
import { ReactComponent as LogoIcon } from '../../../assets/icons/crown.svg';
import { ReactComponent as CartIcon } from '../../../assets/icons/shopping-bag.svg';
import { auth } from '../../../firebase/firebase.utils';
import './ShopHeader.scss';
import { useDispatch, useSelector } from 'react-redux';
import { shopCloseDropdown, shopToggleDropdown } from '../../../store/actions';
import MaterialLoaderComponent from '../../loader/MaterialLoader';
import { selectShopCurrentUser } from '../../../store/selectors/shopUser';
import { selectShopCartQuantity, selectShopCartVisibleDropdown } from '../../../store/selectors';
import ShopCartDropdownHooks from '../cart-dropdown/ShopCartDropdownHooks';
import useClickOutside from '../../hooks/useClickOutside';

export default () => {
    // аля mapStateToProps
    const currentUser = useSelector(selectShopCurrentUser);
    const visibleDropdown = useSelector(selectShopCartVisibleDropdown);
    const cartQuantity = useSelector(selectShopCartQuantity);

    // так диспатчу если коллбек
    const dispatch = useDispatch();
    const toggleDropdown = useCallback(() => dispatch(shopToggleDropdown()), [dispatch]);

    const ref = useRef();

    useClickOutside(ref, () => dispatch(shopCloseDropdown()));

    return (
        <div className="shop-header">
            <div className="shop-header__title">Shop</div>
            <LogoIcon className="shop-header__logo" />
            <div className="shop-header__sign">
                {currentUser === null ? (
                    <MaterialLoaderComponent message="" customStyles={{ width: '30px' }} />
                ) : currentUser ? (
                    <>
                        <a
                            href="/"
                            onClick={e => {
                                e.preventDefault();
                                auth.signOut();
                            }}
                        >
                            Sign Out
                        </a>
                    </>
                ) : (
                    <Link to="/shop/sign">Sign In</Link>
                )}
            </div>
            <div className="shop-header__cart" ref={ref}>
                <span className="shop-header__cart-count">{cartQuantity}</span>
                <CartIcon className="shop-header__cart-icon" onClick={toggleDropdown} />
                {visibleDropdown && <ShopCartDropdownHooks />}
            </div>
            {currentUser && <div className="shop-header__user">Hello: {currentUser.displayName}</div>}
        </div>
    );
};
