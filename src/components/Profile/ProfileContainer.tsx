import React, {Component, ComponentType} from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {ProfilePageType, setUserAPIProfileTC} from "../../redux/profile_reducer";
import {AppStateType} from "../../redux/reduxStore";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

type PathParamsType = {
    userId: string
}

export type CommonPropsType = RouteComponentProps<PathParamsType> & ProfilePropsType

class ProfileContainer extends Component<CommonPropsType> {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = '2';
        }

        this.props.setUserAPIProfileTC(userId)
    }

    render() {

        return (
            <div>
                <Profile profileData={this.props.profileData} />
            </div>
        );
    }
}


export type mapStateToPropsType = {
    profileData: ProfilePageType | null,
    isAuth: boolean
}
type mapDispatchToPropsType = {
    setUserAPIProfileTC: (userId: string) => void
}

export type ProfilePropsType = mapDispatchToPropsType & mapStateToPropsType;

let mapStateToProps = (state: AppStateType): { profileData: ProfilePageType | null } => {
    return {
        profileData: state.profile.profile,
    }
}

export default compose<ComponentType>(
    connect(mapStateToProps, {setUserAPIProfileTC}),
    withRouter,
    withAuthRedirect
)(ProfileContainer);
