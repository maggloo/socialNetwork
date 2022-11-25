import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/reduxStore";
import {DataType, setAuthUserData} from "../../redux/auth_reducer";
import {usersAPI} from "../../api/api";

class HeaderContainer extends React.Component<AuthPropsType> {

    componentDidMount() {
        usersAPI.authMe()
            .then(data => {
                if (data.resultCode === 0) {
                    this.props.setAuthUserData(data.data)
                }
            })
    }

    render() {
        return (
            <Header {...this.props} />
        )
    }
}


type MapDispatchToPropsType = {
    setAuthUserData: (data: DataType) => void
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

export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer);