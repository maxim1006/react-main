import React, { memo, useEffect } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import MainMenu from '../components/menu/MainMenu';
import ShopHome from '../components/shop/home/ShopHome';
import '../components/shop/Shop.scss';
import NotFound from '../components/NotFound';
import SignInAndSignUp from '../components/shop/sign-in-and-sign-up/SignInAndSignUp';
import useShopLogin from '../components/hooks/useShopLogin';
import ShopHeaderHooks from '../components/shop/header/ShopHeaderHooks';
import ShopCheckout from '../components/shop/checkout/ShopCheckout';
import ShopCollectionsHooks from '../components/shop/collections/ShopCollectionsHooks';
import ShopCollection from '../components/shop/collection/ShopCollection';
import { fetchShopDataThunk } from '../store/actions';
import NotificationPortal from '../components/portals/notification/NotificationPortal';

// Это чисто для примера thunk в action, или асинхронщина в useShopData
export default memo(() => {
    useShopLogin();

    const dispatchFetchShopData = useDispatch();

    useEffect(() => {
        dispatchFetchShopData(fetchShopDataThunk());
    }, [dispatchFetchShopData]);

    const fetchShopDataError = useSelector(state => state.shopData.errorMessage);

    const user = useSelector(state => state.shopUser.currentUser);

    return (
        <div className='shop'>
            <ShopHeaderHooks />

            <div className='shop__menu'>
                <MainMenu
                    exact
                    routes={[
                        { to: '/shop', title: 'Home' },
                        { to: '/shop/collections', title: 'Collections' },
                    ]}
                />
            </div>

            {/* покажет только первый найденный роут*/}
            {/* Только ShopHome будет иметь доступ к history, location и match* поэтому исползьую withRouter во внутренних компонентах */}
            <Switch>
                <Route path='/shop' exact component={ShopHome} />

                {/* Если залогинился то при запросе на /shop/sign редирекчу на /shop*/}
                {/* render - это как стандартный рендер метод у компоненты*/}
                <Route path='/shop/sign' render={() => (user ? <Redirect to='/shop' /> : <SignInAndSignUp />)} />
                <Route path='/shop/collections' exact component={ShopCollectionsHooks} />
                <Route path='/shop/collections/:categoryId' exact component={ShopCollection} />
                <Route path='/shop/checkout' exact component={ShopCheckout} />
                <Route path='/shop/*'>
                    <NotFound>Shop not found</NotFound>
                </Route>
            </Switch>

            {fetchShopDataError && <NotificationPortal styleClass='_error'>{fetchShopDataError}</NotificationPortal>}
        </div>
    );
});
