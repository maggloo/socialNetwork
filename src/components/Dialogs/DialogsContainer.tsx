import React from "react";
import {
    MessagesPageType
} from "../../redux/store";
import {addMessage, updateMessageText} from "../../redux/dialogs_reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/reduxStore";


type MapStateToPropsType = {
    messages: MessagesPageType,
    isAuth: boolean
}

type MapDispatchToPropsType = {
    addMessage: () => void,
    updateMessageText: (text: string) => void
}

export type ActionType = MapStateToPropsType & MapDispatchToPropsType

let mapStateToProps = (state: AppStateType): MapStateToPropsType  => {
    return {
        messages: state.messages,
        isAuth: state.auth.data.isAuth
    }
}

const DialogsContainer = connect(mapStateToProps, {
    addMessage,
    updateMessageText
})(Dialogs);

export default DialogsContainer;