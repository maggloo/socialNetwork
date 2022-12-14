import React, {ComponentType} from 'react';
import {connect} from "react-redux";
import {AppStateType} from "../../redux/reduxStore";
import {
    followUserTC, getUsersTC,
    setCurrentPage,
    toggleFollowingProgress, unfollowUserTC, UserType,
} from "../../redux/users_reducer";
import Users from "./Users";
import Preloader from "../common/preloader/Preloader";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsers,
    getUsers, getUsersSuper
} from "../../redux/usersSelectors";

class UsersContainer extends React.Component<UserPropsType> {

    componentDidMount() {
        this.props.getUsersTC?.(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (pageNumber: number) => {

        this.props.getUsersTC?.(pageNumber, this.props.pageSize);
    }

    render() {
        return <>
            {this.props.isFetching
                ? <Preloader/>
                : null}
            <Users
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                onPageChanged={this.onPageChanged}
                users={this.props.users}
                followUserTC={this.props.followUserTC}
                unfollowUserTC={this.props.unfollowUserTC}
                followingInProgress={this.props.followingInProgress}
              />
        </>
    }
}


type mapDispatchToPropsType = {
    setCurrentPage?: (page: number) => void,
    getUsersTC?: (currentPage: number, pageSize: number) => void,
    followUserTC: (userId: number) => void,
    unfollowUserTC: (userId: number) => void,
}

export type MapStateToPropsType = {
    users: Array<UserType>,
    pageSize: number,
    totalUsersCount: number,
    currentPage: number,
    isFetching?: boolean,
    followingInProgress: Array<number>
}

export type UserPropsType = mapDispatchToPropsType & MapStateToPropsType

/*
let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}
*/

let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        users: getUsersSuper(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsers(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    }
}

export default compose<ComponentType>(
    withAuthRedirect,
    connect(mapStateToProps, {
        setCurrentPage,
        toggleFollowingProgress,
        getUsersTC,
        followUserTC,
        unfollowUserTC
    })
)(UsersContainer);
