import React, {Component} from 'react';
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {ProfilePageType, ProfilePostsType, setUserProfile} from "../../redux/profile_reducer";
import {AppStateType} from "../../redux/reduxStore";


class ProfileContainer extends Component<ProfilePropsType> {

    componentDidMount() {
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
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

export default connect(mapStateToProps, {
    setUserProfile
}) (ProfileContainer);