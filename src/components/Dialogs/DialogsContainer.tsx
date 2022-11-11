import React from "react";
import {
    dispatchMessageType,
    MessagesPageType
} from "../../redux/store";
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialogs_reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/reduxStore";


let mapStateToProps = (state: AppStateType): {messages: MessagesPageType}  => {
    return {
        messages: state.messages
    }
}

let mapDispatchToProps = (dispatch: (action: dispatchMessageType) => void): {addMessageActionCreator: (text:string) => void, addMessageHandler: () => void } => {
    return {
        addMessageActionCreator: (text: string) =>  dispatch(updateNewMessageTextActionCreator(text)),
        addMessageHandler: () => dispatch(addMessageActionCreator())
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;