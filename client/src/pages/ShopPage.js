import React, { memo } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';
import MainMenu from '../components/menu/MainMenu';
import ShopHome from '../components/shop/home/ShopHome';
import '../components/shop/Shop.scss';
import NotFound from '../components/NotFound';
import SignInAndSignUp from '../components/shop/sign-in-and-sign-up/SignInAndSignUp';
import useShopLogin from '../components/hooks-components/useShopLogin';
import ShopHeaderHooks from '../components/shop/header/ShopHeaderHooks';
import ShopCheckout from '../components/shop/checkout/ShopCheckout';
import ShopCollectionsHooks from '../components/shop/collections/ShopCollectionsHooks';
import ShopCollection from '../components/shop/collection/ShopCollection';
import useShopData from '../components/hooks-components/useShopData';

export default memo(() => {
    useShopLogin();
    useShopData();

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
            <Routes>
                <Route path='/shop' element={<ShopHome />} />

                {/* Если залогинился то при запросе на /shop/sign редирекчу на /shop*/}
                {/* render - это как стандартный рендер метод у компоненты, поэтому могу использовать props*/}
                <Route path='/shop/sign' render={props => (user ? <Navigate to='/shop' /> : <SignInAndSignUp />)} />
                <Route path='/shop/collections' element={<ShopCollectionsHooks />} />
                <Route path='/shop/collections/:categoryId' element={<ShopCollection />} />
                <Route path='/shop/checkout' element={<ShopCheckout />} />
                <Route path='/shop/*'>
                    <NotFound>Shop not found</NotFound>
                </Route>
            </Routes>
        </div>
    );
});
