import React, {Component, ComponentType} from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getStatusTC, ProfilePageType, setUserAPIProfileTC, updateStatusTC} from "../../redux/profile_reducer";
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
        this.props.setUserAPIProfileTC(userId);

        this.props.getStatusTC(userId);


    }

    render() {

        return (
            <div>
                <Profile
                    profileData={this.props.profileData}
                    status={this.props.status}
                    updateStatus={this.props.updateStatusTC}
                />
            </div>
        );
    }
}


export type mapStateToPropsType = {
    profileData: ProfilePageType | null,
    status: string,
    isAuth: boolean
}
type mapDispatchToPropsType = {
    setUserAPIProfileTC: (userId: string) => void,
    getStatusTC: (userId: string) => void,
    updateStatusTC: (status: string) => void
}

export type ProfilePropsType = mapDispatchToPropsType & mapStateToPropsType;

let mapStateToProps = (state: AppStateType): { profileData: ProfilePageType | null, status: string } => {
    return {
        profileData: state.profile.profile,
        status: state.profile.status
    }
}

export default compose<ComponentType>(
    connect(mapStateToProps, {setUserAPIProfileTC, getStatusTC, updateStatusTC}),
    withRouter,
    // withAuthRedirect
)(ProfileContainer);
