import s from "../Dialogs.module.css";
import {NavLink} from "react-router-dom";
import React from "react";
import {DialogItemPropsType} from "../../../redux/store";



export const DialogItem = (props: DialogItemPropsType) => {
    return (
        <div className={s.dialog}>
            <img src={props.profilePic} className={s.profilePic}></img>
            <NavLink to={`/dialogs/${props.id}`} className={s.dialogItem}>{props.name}</NavLink>
        </div>
    )
}
