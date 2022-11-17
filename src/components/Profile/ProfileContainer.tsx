import React, {Component} from 'react';
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {ProfilePageType, ProfilePostsType, setUserProfile} from "../../redux/profile_reducer";
import {AppStateType} from "../../redux/reduxStore";
import {RouteComponentProps, withRouter} from "react-router-dom";

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
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
            .then(res => {
                this.props.setUserProfile(res.data);
            })
    }

    render() {
        return (
            <div>
                <Profile {...this.props} profileData={this.props.profileData} />
            </div>
        );
    }
}


export type mapStateToPropsType = {
    profileData: ProfilePageType | null
}
type mapDispatchToPropsType = {
    setUserProfile: (profile: ProfilePostsType) => void
}

type ProfilePropsType = mapDispatchToPropsType & mapStateToPropsType

let mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        profileData: state.profile.profile
    }
}

let WithUrlData = withRouter(ProfileContainer);

export default connect(mapStateToProps, {
    setUserProfile
}) (WithUrlData);