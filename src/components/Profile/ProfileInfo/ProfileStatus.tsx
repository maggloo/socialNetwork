import React, {ChangeEvent} from 'react';
import s from "./ProfileInfo.module.css";

type ProfileStatusPropsType = {
    status: string,
    updateStatus: (status: string) => void
}

type StatusType = {
    editMode: boolean,
    status: string
}

class ProfileStatus extends React.Component<ProfileStatusPropsType> {


    state: StatusType = {
        editMode: false,
        status: this.props.status
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
        this.props.updateStatus(this.state.status)
    }

    onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            status: e.currentTarget.value,
        });
    }

    componentDidUpdate = (prevProps: Readonly<ProfileStatusPropsType>, prevState: Readonly<{}>, snapshot?: any) => {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
    }

    render() {
        return (
            <div>
                {!this.state.editMode &&
                    <span onDoubleClick={this.activateEditModeHandler}>{this.props.status || '---'}</span>
                }
                {this.state.editMode &&
                    <input onChange={this.onStatusChange} onBlur={this.deactivateEditModeHandler} autoFocus={true}
                           value={this.state.status}></input>
                }
            </div>

        )
    }
}

export default ProfileStatus