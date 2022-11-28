import React, {ChangeEvent} from "react";
import s from "./Dialogs.module.css";
import {Message} from "./Message/Message";
import {DialogItem} from "./DialogItem/DialogItem";
import {
    DialogItemPropsType,
    MessagePropsType,
    MessagesPageType
} from "../../redux/store";
import {ActionType} from "./DialogsContainer";
import {Redirect} from "react-router-dom";


const Dialogs = (props: ActionType) => {

    const messagesElements = props.messages.messagesData.map((el: MessagePropsType) => {
        return <Message
            key={el.id}
            message={el.message}
            id={el.id}
            profilePic={el.profilePic}
        />
    });

    const dialogElements = props.messages.dialogsData.map((el: DialogItemPropsType) => {
        return <DialogItem
            key={el.id}
            name={el.name}
            id={el.id}
            profilePic={el.profilePic}
        />
    });

    const addMessageHandler = () => {
        props.addMessage();
    }

    let onPMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        if (e.currentTarget.value) {
            props.updateMessageText(e.currentTarget.value)
        }
    }

    if (!props.isAuth) return <Redirect to={'/login'} />;

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogElements}
            </div>
            <div>
                {messagesElements}
                <div className={s.messageForm}>
                    <textarea onChange={onPMessageChange} value={props.messages.newMessageText}></textarea>
                    <button onClick={addMessageHandler}>Send Message</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;