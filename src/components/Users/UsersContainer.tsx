import React from 'react';
import {connect} from "react-redux";
import {AppStateType} from "../../redux/reduxStore";
import {
    follow,
    initialStateUsersPageType, setCurrentPage, setTotalUsersCount,
    setUsers, toggleIsFetching,
    unfollow,
    UserType
} from "../../redux/users_reducer";
import axios from "axios";
import Users from "./Users";
import Preloader from "../common/preloader/Preloader";


class UsersContainer extends React.Component<UserPropsType> {

    componentDidMount() {
        this.props.toggleIsFetching(true)
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.usersPage.currentPage}&count=${this.props.usersPage.pageSize}`)
            .then(res => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(res.data.items)
                this.props.setTotalUsersCount(res.data.totalCount)
            })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber);
        this.props.toggleIsFetching(true);
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.usersPage.pageSize}`)
            .then(res => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(res.data.items)
            })
    }

    render() {
        return <>
            {this.props.usersPage.isFetching
                ? <Preloader />
                : null}
            <Users
                totalUsersCount={this.props.usersPage.totalUsersCount}
                pageSize={this.props.usersPage.pageSize}
                currentPage={this.props.usersPage.currentPage}
                onPageChanged={this.onPageChanged}
                users={this.props.usersPage.users}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
                isFetching={this.props.usersPage.isFetching}
            />
        </>
    }


}

type mapStateToPropsType = {
    usersPage: initialStateUsersPageType
}

type mapDispatchToPropsType = {
    follow: (userID: number) => void,
    unfollow: (userID: number) => void,
    setUsers: (users: Array<UserType>) => void,
    setCurrentPage: (page: number) => void,
    setTotalUsersCount: (usersCount: number) => void,
    toggleIsFetching: (isFetching: boolean) => void
}


export type UserPropsType = mapDispatchToPropsType & mapStateToPropsType

let mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        usersPage: state.usersPage,
    }
}

/*
let mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        follow: (userID: number) => dispatch(followAC(userID)),
        unfollow: (userID: number) => dispatch(unFollowAC(userID)),
        setUsers: (users: Array<UserType>) => dispatch(setUsersAC(users)),
        setCurrentPage: (page: number) => dispatch(setCurrentPageAC(page)),
        setTotalUsersCount: (usersCount: number) => dispatch(setTotalUsersCountAC(usersCount)),
        toggleIsFetching: (isFetching: boolean) => dispatch(toggleIsFetchingAC(isFetching)),
    }
}
*/



export default connect(mapStateToProps, {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    toggleIsFetching,
})(UsersContainer);
