import {Link} from "react-router-dom";
import React from 'react';
import "./MainMenu.scss";

export default function MainMenu({routes}) {

    if (Array.isArray(routes)) {
        return (
            <ul className="main-menu">
                {
                    routes.map((route, index) => {
                        return (
                            <li className="main-menu__item" key={index}>
                                <Link to={route.to}>{route.title}</Link>
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
