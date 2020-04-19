import React, {memo} from "react";
import "./navbar.component.scss";
import NavBarItem from "./item/navbar-item.component";
import {ReactComponent as BellIcon} from "../../assets/icons/bell.svg";
import Dropdown from "../dropdown/dropdown.component";


const NavBar = memo((props) => {
    return (
        <div className="navbar">
            <ul className="navbar__list">
                <NavBarItem icon={<BellIcon />}/>
                <NavBarItem icon={<BellIcon />}/>
                <NavBarItem icon={<BellIcon />}>
                    <Dropdown/>
                </NavBarItem>
            </ul>
        </div>
    );
});

export default NavBar;
