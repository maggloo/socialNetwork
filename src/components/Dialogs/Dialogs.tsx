import React, {FC} from "react";
import s from "./Dialogs.module.css";
import {Message} from "./Message/Message";
import {DialogItem} from "./DialogItem/DialogItem";
import {ActionType} from "./DialogsContainer";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {DialogItemPropsType, MessagePropsType} from "../../redux/dialogs_reducer";
import {TextArea} from "../common/formsControls/FormsControls";
import {maxLengthCreator, requiredField} from "../../utils/validators/validators";


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


    let addNewMessage = (values: AddMessageFormType) => {
        props.addMessage(values.newMessageBody)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogElements}
            </div>
            <div>
                {messagesElements}

                <AddMessageFormRedux onSubmit={addNewMessage} />

            </div>
        </div>
    )
}

type AddMessageFormType = {
    newMessageBody: string
}
const maxLength10 = maxLengthCreator(10);

const AddMessageForm: FC<InjectedFormProps<AddMessageFormType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div className={s.messageForm}>
                <Field component={TextArea} name='newMessageBody'
                       placeholder='Enter your message' validate={[requiredField, maxLength10]}/>
                <button>Send Message</button>
            </div>
        </form>
    )
}

const AddMessageFormRedux = reduxForm<AddMessageFormType>({form: 'dialogAddMessageForm'})(AddMessageForm)


export default Dialogs;