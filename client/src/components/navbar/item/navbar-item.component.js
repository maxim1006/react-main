import React, {memo, useState} from "react";
import "./navbar-item.component.scss";
import {CSSTransition} from "react-transition-group";

const NavBarItem = memo((props) => {
    const [open, setOpen] = useState();

    return (
        <li className="navbar-item">
            <a href="#" className="navbar-item__link" onClick={() => setOpen(!open)}>
                {props.icon}
            </a>
            {
                props.children ?
                    <CSSTransition
                        in={open}
                        classNames="navbar-item__dropdown"
                        unmountOnExit
                        timeout={300}
                    >
                        <div className="navbar-item__dropdown">
                            {props.children}
                        </div>
                    </CSSTransition>
                    : null
            }
        </li>
    );
});

export default NavBarItem;
