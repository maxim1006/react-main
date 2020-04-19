import React, {memo, useState} from "react";
import DropdownItem from "./item/dropdown-item.component";
import "./dropdown.component.scss";
import {ReactComponent as UserIcon} from "../../assets/icons/user.svg";
import {ReactComponent as LocationIcon} from "../../assets/icons/location.svg";
import {CSSTransition} from "react-transition-group";

const Dropdown = memo((props) => {
    const [activeMenu, setActiveMenu] = useState("main");

    //unmountOnExit - удаляет чайлдов если не активны
    return (
        <div className="dropdown">
            <CSSTransition
                in={activeMenu === "main"}
                unmountOnExit
                timeout={300}
                classNames="dropdown__items"
            >
                <div className="dropdown__items">
                    <DropdownItem leftIcon={<UserIcon/>}>My profile</DropdownItem>
                    <DropdownItem leftIcon={<LocationIcon/>}>Location</DropdownItem>
                    <div onClick={() => setActiveMenu("second")}>
                        <DropdownItem>Go to second menu</DropdownItem>
                    </div>
                </div>
            </CSSTransition>

            <CSSTransition
                in={activeMenu === "second"}
                unmountOnExit
                timeout={300}
                classNames="dropdown__items-second"
            >
                <div className="dropdown__items-second">
                    <DropdownItem leftIcon={<UserIcon/>}>My profile</DropdownItem>
                    <div onClick={() => setActiveMenu("main")}>
                        <DropdownItem>Go to main menu</DropdownItem>
                    </div>
                </div>
            </CSSTransition>
        </div>
    )
});

export default Dropdown;
