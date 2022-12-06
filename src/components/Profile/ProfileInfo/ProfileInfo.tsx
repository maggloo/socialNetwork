import React from 'react';
import s from "./ProfileInfo.module.css";
import Preloader from "../../common/preloader/Preloader";
import ProfileStatus from "./ProfileStatus";
import {ProfilePropsType} from "../Profile";



function ProfileInfo(props: ProfilePropsType) {

    if (!props.profileData){
        return <Preloader />
    }


    return (
        <div>

            <div className={s.descriptionBlock}>
                <img src={props.profileData?.photos.large}/>
                <ProfileStatus
                    status={props.status}
                    updateStatus={props.updateStatus}
                />
            </div>
        </div>
    )
}

export default ProfileInfo;