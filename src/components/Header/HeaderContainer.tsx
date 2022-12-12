import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/reduxStore";
import {authUserTC, logoutUserTC} from "../../redux/auth_reducer";

class HeaderContainer extends React.Component<AuthPropsType> {

    componentDidMount() {
        this.props.authUserTC();
    }

    render() {
        return (
            <Header {...this.props} />
        )
    }
}


type MapDispatchToPropsType = {
    authUserTC: () => void
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

export default connect(mapStateToProps, {authUserTC, logoutUserTC})(HeaderContainer);