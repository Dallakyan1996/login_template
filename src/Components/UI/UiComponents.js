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
    const { customStyle, type, onChange, label, icon } = props
    return <div className={s.my_input_wrapper}>
        {label ? <div className={s.my_input_label}>{label}</div> : null}
        {icon ? <div className={s.inp_icon_div}>{icon}</div> : null}
        <input
            className={s.my_input}
            style={{
                ...customStyle
            }}
            type={type}
            onChange={(e) => { onChange && onChange(e.target.value) }}></input>
    </div>
}

export const MyButton = (props) => {
    const { type, onClick, customStyle } = props
    return <button
        style={customStyle}
        type={type}
        className={s.my_button}
        onClick={onClick}>{props.children}</button>
}

export const MyHr = (props) => {
    const { customStyle } = props
    return <hr style={customStyle} className={s.my_hr}></hr>
}

export const CircleButton = (props) => {
    const { icon, isActive } = props
    return <div className={!isActive ? s.circleBtn : s.activeCircleBtn}></div>
}

export const MyRadioInput = (props) => {
    const { name, id, defaultChecked, label, onChange } = props

    return <div style={{
        display: "flex",
        alignItems: "center",
        padding: ".5rem"
    }}>
        <input className={s.my_radio_input} defaultChecked={defaultChecked} name={name} id={id} type="radio" onChange={(e) => {
            if (onChange)
                onChange(e)
        }} />
        {label ? <label
            htmlFor={id}
            style={{
                cursor: "pointer",
                paddingLeft: "6px"
            }}>{label}</label> : null}
    </div>
}