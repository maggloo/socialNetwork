import React, {Component} from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {ProfilePageType, setUserAPIProfileTC} from "../../redux/profile_reducer";
import {AppStateType} from "../../redux/reduxStore";
import {Redirect, RouteComponentProps, withRouter} from "react-router-dom";

type PathParamsType = {
    userId: string
}

type CommonPropsType = RouteComponentProps<PathParamsType> & ProfilePropsType

class ProfileContainer extends Component<CommonPropsType> {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = '2';
        }

        this.props.setUserAPIProfileTC(userId)
    }

    render() {

        if (!this.props.isAuth) return <Redirect to={'/login'}/>
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

export type ProfilePropsType = mapDispatchToPropsType & mapStateToPropsType

let mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        profileData: state.profile.profile,
        isAuth: state.auth.data.isAuth,
    }
}

let WithUrlData = withRouter(ProfileContainer);

export default connect(mapStateToProps, {
    setUserAPIProfileTC
}) (WithUrlData);