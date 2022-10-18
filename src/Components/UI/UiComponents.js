import React from "react";
import s from "./my_components.module.css"

export const MyCard = (props) => {
    const { customStyle } = props;
    return <div className={s.myCard} style={customStyle}>
        {props.children}
    </div>
}

export const MyModal = (props) => {
    const { customStyle, onClose, modalHeader, headerIcon } = props
    return <div style={customStyle} className={s.modal_background_wrapper}>
        <div className={s.modal_wrapper}>
            <div className={modalHeader ? s.modal_header_text : s.modal_header}>
                {headerIcon && <div>{headerIcon}</div>}
                {modalHeader && <div>{modalHeader}</div>}
                <span onClick={onClose} style={{
                    cursor: "pointer"
                }}>X</span>
            </div>
            <MyHr></MyHr>
            <div className={s.modal_content}>
                {props.children}
            </div>
        </div>
    </div>
}

export const MyInput = (props) => {
    const { customStyle, type, value, changeInput, label } = props
    return <div>
        {label && <label>{label}</label>}
        <input style={customStyle} type={type} onChange={(e) => changeInput(e.target.value)}></input>
    </div>
}

export const MyButton = (props) => {
    const { type, onClickFn, customStyle } = props
    return <button
        style={customStyle}
        type={type}
        className={s.my_button}
        onClick={onClickFn}>{props.children}</button>
}

export const MyHr = (props) => {
    const { customStyle } = props
    return <hr style={customStyle} className={s.my_hr}></hr>
} 