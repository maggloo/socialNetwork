import React, {ChangeEvent, useEffect, useState} from 'react';
import s from "./ProfileInfo.module.css";

type ProfileStatusPropsType = {
    status: string,
    updateStatus: (status: string) => void
}


export const ProfileStatusWithHooks = (props: ProfileStatusPropsType) => {

    const [editMode, setEditMode] = useState(false);
    const [status, setStatus] = useState(props.status);

    useEffect(() => {
        setStatus(props.status)
    }, [props.status])

    const activateEditMode = () => {
        setEditMode(true);
    }

    const deactivateEditMode = () => {
        setEditMode(false);
        props.updateStatus(status);
    }

    const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.value);
    }

        return (
            <div>
                { !editMode &&
                    <span onDoubleClick={activateEditMode}>{props.status || '---'}</span>
                }
                {editMode &&
                    <input onChange={onStatusChange} onBlur={deactivateEditMode} autoFocus={true}
                           value={status}></input>
                }
            </div>

        )
}
