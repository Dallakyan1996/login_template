import React from "react";
import s from "./my_components.module.css"

export const MyCard = (props) => {
    const { style } = props;
    return <div className={s.myCard} style={style}>
        {props.children}
    </div>
}