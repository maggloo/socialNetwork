import React from 'react';
import {connect} from "react-redux";
import Users from "./UsersC";
import {AppStateType} from "../../redux/reduxStore";
import {
    followAC,
    initialStateUsersPageType,
    setUsersAC,
    unFollowAC,
    UserType
} from "../../redux/users_reducer";
import {Dispatch} from "redux";


type mapStateToPropsType = {
    usersPage: initialStateUsersPageType
}

type mapDispatchToPropsType = {
    follow: (userID: number) => void,
    unfollow: (userID: number) => void,
    setUsers: (users: Array<UserType>) => void,
}


export type UserPropsType = mapDispatchToPropsType & mapStateToPropsType

let mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        usersPage: state.usersPage
    }
}

let mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        follow: (userID: number) => dispatch(followAC(userID)),
        unfollow: (userID: number) => dispatch(unFollowAC(userID)),
        setUsers: (users: Array<UserType>) => dispatch(setUsersAC(users)),
    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);
