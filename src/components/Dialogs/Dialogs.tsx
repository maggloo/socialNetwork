import React, {ChangeEvent} from "react";
import s from "./Dialogs.module.css";
import {Message} from "./Message/Message";
import {DialogItem} from "./DialogItem/DialogItem";
import {
    DialogItemPropsType,
    MessagePropsType
} from "../../redux/store";
import {ActionType} from "./DialogsContainer";


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