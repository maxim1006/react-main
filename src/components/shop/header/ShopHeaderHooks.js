import React, {useCallback} from "react";
// так импорчу свг
import {ReactComponent as LogoIcon} from "../../../assets/icons/crown.svg";
import {ReactComponent as CartIcon} from "../../../assets/icons/shopping-bag.svg";
import {auth} from "../../../firebase/firebase.utils";
import {Link} from "react-router-dom";
import "./ShopHeader.scss";
import {useDispatch, useSelector} from "react-redux";
import ShopCartDropdown from "../cart-dropdown/ShopCartDropdown";
import {shopToggleDropdown} from "../../../store/actions";
import MaterialLoaderComponent from "../../loader/MaterialLoader";

export default () => {

    // аля mapStateToProps
    const {currentUser: user} = useSelector(state => state.shopUser);
    const {visibleDropdown} = useSelector(state => state.shopCart);
    const {cartItems} = useSelector(state => state.shopCart);

    // так диспатчу если коллбек
    const dispatch = useDispatch();
    const toggleDropdown = useCallback(
        () => dispatch(shopToggleDropdown()),
        [dispatch]
    );

    const cartQuantity = Object.values(cartItems).reduce((acc, {quantity}) => acc + quantity, 0);

    return (
        <div className="shop-header">
            <div className="shop-header__title">
                Shop
            </div>
            <LogoIcon className="shop-header__logo"/>
            <div className="shop-header__sign">
                {
                    user === null ?
                        <MaterialLoaderComponent message="" customStyles={{width: '30px'}}/> :
                        user ?
                        <>
                            <a href="/" onClick={(e) => {
                                e.preventDefault();
                                auth.signOut();
                            }}>Sign Out</a>
                        </> :
                        <Link to="/shop/sign">Sign In</Link>
                }
            </div>
            <div className="shop-header__cart">
                <span className="shop-header__cart-count">{cartQuantity}</span>
                <CartIcon className="shop-header__cart-icon" onClick={toggleDropdown}/>
                {visibleDropdown && <ShopCartDropdown/>}
            </div>
        </div>
    )
};
