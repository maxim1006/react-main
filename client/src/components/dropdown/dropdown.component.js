import React, { memo, useState } from "react";
import DropdownItem from "./item/dropdown-item.component";
import "./dropdown.component.scss";
import { ReactComponent as UserIcon } from "../../assets/icons/user.svg";
import { ReactComponent as LocationIcon } from "../../assets/icons/location.svg";
import { CSSTransition } from "react-transition-group";

const Dropdown = memo(props => {
    const [activeMenu, setActiveMenu] = useState("main");
    const [height, setHeight] = useState();

    function calcHeight(el) {
        setHeight(el.offsetHeight);
    }

    // unmountOnExit - удаляет чайлдов если не активны
    return (
        <div className="dropdown" style={{ height: `${height + 32}px` }}>
            <CSSTransition
                in={activeMenu === "main"}
                unmountOnExit
                timeout={300}
                classNames="dropdown__items"
                onEnter={el => {
                    calcHeight(el);
                    console.log("onEnter className", el.className);
                }}
                onEntering={el => {
                    console.log("onEntering className", el.className);
                }}
                onEntered={el => {
                    console.log("onEntered className", el.className);
                }}
                onExit={el => {
                    console.log("onExit className", el.className);
                }}
                onExiting={el => {
                    console.log("onExiting className", el.className);
                }}
                onExited={el => {
                    console.log("onExited className", el.className);
                }}
            >
                <div className="dropdown__items">
                    <DropdownItem leftIcon={<UserIcon />}>
                        My profile
                    </DropdownItem>
                    <DropdownItem leftIcon={<LocationIcon />}>
                        Location
                    </DropdownItem>
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
                onEnter={el => {
                    calcHeight(el);
                    console.log("onEnter className", el.className);
                }}
            >
                <div className="dropdown__items-second">
                    <DropdownItem leftIcon={<UserIcon />}>
                        My profile
                    </DropdownItem>
                    <div onClick={() => setActiveMenu("main")}>
                        <DropdownItem>Go to main menu</DropdownItem>
                    </div>
                </div>
            </CSSTransition>
        </div>
    );
});

export default Dropdown;
