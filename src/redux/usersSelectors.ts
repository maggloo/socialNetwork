import {AppStateType} from "./reduxStore";
import {createSelector} from "reselect";
import {UserType} from "./users_reducer";

export const getUsers = (state: AppStateType) => {
    return state.usersPage.users
}


export const getUsersSuper = createSelector(getUsers, (users: UserType[]) => {
    return users.filter( u => true)
});

export const getPageSize = (state: AppStateType) => {
    return state.usersPage.pageSize
}

export const getTotalUsers = (state: AppStateType) => {
    return state.usersPage.totalUsersCount
}

export const getCurrentPage = (state: AppStateType) => {
    return state.usersPage.currentPage
}

export const getIsFetching = (state: AppStateType) => {
    return state.usersPage.isFetching
}

export const getFollowingInProgress = (state: AppStateType) => {
    return state.usersPage.followingInProgress
}