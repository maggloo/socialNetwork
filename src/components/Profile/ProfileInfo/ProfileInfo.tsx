import React from 'react';
import s from "./ProfileInfo.module.css";

function ProfileInfo(props: any) {
    return (
        <div>
            <div className={s.content}>
                <img src={'https://cdn140.picsart.com/304066907246201.jpg'}></img>
            </div>
            <div className={s.descriptionBlock}>
                ava+ descr
            </div>
        </div>
    )
}

export default ProfileInfo;