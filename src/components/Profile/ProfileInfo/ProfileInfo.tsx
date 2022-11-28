import React from 'react';
import s from "./ProfileInfo.module.css";
import {mapStateToPropsType} from "../ProfileContainer";
import Preloader from "../../common/preloader/Preloader";
import {ProfilePageType} from "../../../redux/profile_reducer";



function ProfileInfo(props: {profileData: ProfilePageType | null}) {

    if (!props.profileData){
        return <Preloader />
    }

    return (
        <div>
            <div className={s.content}>
                <img src={'https://cdn140.picsart.com/304066907246201.jpg'}></img>
            </div>
            <div className={s.descriptionBlock}>
                <img src={props.profileData?.photos.large}/>
                <div>{props.profileData.aboutMe}</div>
            </div>
        </div>
    )
}

export default ProfileInfo;