import React from "react";
import s from "./my_components.module.css"

export const MyCard = (props) => {
    const { style } = props;
    return <div className={s.myCard} style={style}>
        {props.children}
    </div>
}

export const MyModal = (props) => {
    const { style, onClose, modalHeader, headerIcon } = props
    return <div className={s.modal_background_wrapper}>
        <div className={s.modal_wrapper}>
            <div className={modalHeader ? s.modal_header_text : s.modal_header}>
                {headerIcon && <div>{headerIcon}</div>}
                {modalHeader && <div>{modalHeader}</div>}
                <span onClick={onClose} style={{
                    cursor: "pointer"
                }}>X</span>
            </div>
            <div className={s.modal_content}>
                {props.children}
            </div>
        </div>
    </div>
}

export const MyInput = (props) => {
    const { style, type, value, changeInput, label } = props
    return <div>
        {label && <label>{label}</label>}
        <input type={type} onChange={(e) => changeInput(e.target.value)}></input>
    </div>
}