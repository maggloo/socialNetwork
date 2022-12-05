import React from 'react';
import s from "./ProfileInfo.module.css";

type ProfileStatusPropsType = {
    aboutMe: string
}

class ProfileStatus extends React.Component<ProfileStatusPropsType> {
    state = {
        editMode: false
    }

    activateEditModeHandler = () => {
        this.setState({
            editMode: true
        })
    }

    deactivateEditModeHandler = () => {
        this.setState({
            editMode: false
        })
    }

    render() {
        return (
            <div>
                {!this.state.editMode &&
                    <span onDoubleClick={this.activateEditModeHandler}>{this.props.aboutMe}</span>
                }
                {this.state.editMode &&
                        <input onBlur={this.deactivateEditModeHandler} autoFocus={true} value={this.props.aboutMe}></input>
                }
            </div>

        )
    }
}

export default ProfileStatus