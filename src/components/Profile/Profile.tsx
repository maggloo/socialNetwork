import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./My posts/MyPostsContainer";
import {ProfilePageType} from "../../redux/profile_reducer";

export type ProfilePropsType = {
    profileData: ProfilePageType | null,
    status: string,
    updateStatus: (status: string) => void
}


function Profile(props: ProfilePropsType) {
    return (
        <div>
            <ProfileInfo
                profileData={props.profileData}
                status={props.status}
                updateStatus={props.updateStatus}
            />
            <MyPostsContainer />
        </div>
    )
}

export default Profile;