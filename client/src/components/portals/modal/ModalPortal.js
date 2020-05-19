import React from "react";
import ReactDOM from "react-dom";
import "./ModalPortal.scss";

// если в названии поставить [name].module.scss то соберется как css модуль а не просто jsка

export default ({ title, controls }) => {
    // если передать 2м аргументом document.body, то этот портал перетрет все что есть в боди, поэтому
    // создаю див с id в index.html куда хочу рендерить этот портал
    return ReactDOM.createPortal(
        <div className="modal-portal">
            <div className="modal-portal__inner">
                <p>{title}</p>

                <div className="modal-portal__controls">{controls}</div>
            </div>
        </div>,
        document.querySelector("#modal")
    );
};
