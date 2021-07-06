import { NavLink } from 'react-router-dom';
import React from 'react';
import './MainMenu.scss';

export type MainMenuProps = {
    routes: { to: string; title: string }[];
    exact?: boolean;
};

export default ({ routes, exact }: MainMenuProps) => {
    if (Array.isArray(routes)) {
        return (
            <ul className="main-menu">
                {routes.map((route, index) => {
                    return (
                        <li className="main-menu__item" key={index}>
                            {/* тоже что и Link только с возможностью стилизации*/}
                            <NavLink
                                exact={!!exact}
                                strict
                                activeClassName="_active"
                                className="main-menu__link"
                                to={route.to}
                            >
                                {route.title}
                            </NavLink>
                        </li>
                    );
                })}
            </ul>
        );
    }
    return <p>there are no routes for you</p>;
};
