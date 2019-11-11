import {Link} from "react-router-dom";
import React from 'react';
import "./MainMenu.scss";

export default function MainMenu() {
    return (
        <ul className="main-menu">
            <li className="main-menu__item">
                <Link to="/">Redux</Link>
            </li>
            <li className="main-menu__item">
                <Link to="/react">React</Link>
            </li>
            <li className="main-menu__item">
                <Link to="/unknown">Unknown</Link>
            </li>
        </ul>
    );
}
