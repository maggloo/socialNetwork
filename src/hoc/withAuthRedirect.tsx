import {Redirect} from "react-router-dom";
import React, {ComponentType} from "react";
import {AppStateType} from "../redux/reduxStore";
import {connect} from "react-redux";

type MapStateToPropsType = {
    isAuth: boolean
}

let mapStateToPropsRedirect = (state: AppStateType): MapStateToPropsType => {
    return {
        isAuth: state.auth.data.isAuth
    }
}

export function withAuthRedirect <T>(Component: ComponentType<T>) {

    const RedirectComponent = (props:  MapStateToPropsType) => {
        let {isAuth, ...restProps} = props;
        if (!isAuth) return <Redirect to={'/login'}/>
        return (
            <Component {...restProps as T}/>
        )
    }

    return connect(mapStateToPropsRedirect)(RedirectComponent);
}