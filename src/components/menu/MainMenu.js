import {NavLink} from "react-router-dom";
import React from 'react';
import "./MainMenu.scss";

export default function MainMenu({routes, exact}) {

    if (Array.isArray(routes)) {
        return (
            <ul className="main-menu">
                {
                    routes.map((route, index) => {
                        return (
                            <li className="main-menu__item" key={index}>
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
                    })
                }
            </ul>
        );
    } else {
        return (
            <p>
                there are no routes for you
            </p>
        );
    }

}
