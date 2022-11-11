import s from "../Dialogs.module.css";
import React from "react";
import {MessagePropsType} from "../../../redux/store";



export const Message = (props: MessagePropsType) => {
    let messagePositioning = (props.id === 1) ? s.leftPosition : s.rightPosition;
    let imgPositioning = (props.id === 1) ? s.leftImg : s.rightImg;
    return (
        <div className={`${s.messages} + ${imgPositioning}`}>
            <img src={props.profilePic} className={s.messagePositioning}></img>
            <div className={`${s.message} + ${messagePositioning}`}>{props.message}</div>
        </div>
    )
}