import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./My posts/MyPostsContainer";
import {ProfilePageType} from "../../redux/profile_reducer";


function Profile(props: {profileData: ProfilePageType | null}) {
    return (
        <div>
            <ProfileInfo profileData={props.profileData}/>
            <MyPostsContainer />
        </div>
    )
}

export default Profile;