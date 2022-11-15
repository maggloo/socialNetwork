import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./My posts/MyPostsContainer";
import {mapStateToPropsType} from "./ProfileContainer";


function Profile(props: mapStateToPropsType) {
    return (
        <div>
            <ProfileInfo profileData={props.profileData}/>
            <MyPostsContainer />
        </div>
    )
}

export default Profile;