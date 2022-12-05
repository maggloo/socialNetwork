import React, {ComponentType} from "react";
import {
    MessagesPageType
} from "../../redux/store";
import {addMessage, updateMessageText} from "../../redux/dialogs_reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/reduxStore";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


type MapStateToPropsType = {
    messages: MessagesPageType,
    isAuth: boolean
}

type MapDispatchToPropsType = {
    addMessage: () => void,
    updateMessageText: (text: string) => void
}

export type ActionType = MapStateToPropsType & MapDispatchToPropsType;

let mapStateToProps = (state: AppStateType): { messages: MessagesPageType, } => {
    return {
        messages: state.messages,
    }
}

export default compose<ComponentType>(
    connect(mapStateToProps, {addMessage, updateMessageText}),
    withAuthRedirect
)(Dialogs);