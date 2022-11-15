import React from "react";
import {
    MessagesPageType
} from "../../redux/store";
import {addMessage, updateMessageText} from "../../redux/dialogs_reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/reduxStore";


let mapStateToProps = (state: AppStateType): {messages: MessagesPageType}  => {
    return {
        messages: state.messages
    }
}

const DialogsContainer = connect(mapStateToProps, {
    addMessage,
    updateMessageText
})(Dialogs);

export default DialogsContainer;