import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/reduxStore";
import {logoutUserTC} from "../../redux/auth_reducer";

class HeaderContainer extends React.Component<AuthPropsType> {

    render() {
        return (
            <Header {...this.props} />
        )
    }
}


type MapDispatchToPropsType = {
    logoutUserTC: () => void
}

type MapStateToPropsType = {
    isAuth: boolean,
    login: string
}

export type AuthPropsType = MapDispatchToPropsType & MapStateToPropsType

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        isAuth: state.auth.data.isAuth,
        login: state.auth.data.login
    }
};

export default connect(mapStateToProps, {logoutUserTC})(HeaderContainer);