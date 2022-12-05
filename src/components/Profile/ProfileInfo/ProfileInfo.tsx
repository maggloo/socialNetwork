import React from 'react';
import s from "./ProfileInfo.module.css";
import Preloader from "../../common/preloader/Preloader";
import {ProfilePageType} from "../../../redux/profile_reducer";
import ProfileStatus from "./ProfileStatus";



function ProfileInfo(props: {profileData: ProfilePageType | null}) {

    if (!props.profileData){
        return <Preloader />
    }

    return (
        <div>

            <div className={s.descriptionBlock}>
                <img src={props.profileData?.photos.large}/>
                <ProfileStatus aboutMe={props.profileData.aboutMe}/>
            </div>
        </div>
    )
}

export default ProfileInfo;