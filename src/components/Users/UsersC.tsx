import {UserPropsType} from "./UsersContainer";
import React from "react";
import axios from "axios";
import userPhoto from "../../assets/imgs/default-pfp-19 (1).jpg";
import s from "./Users.module.css";

class Users extends React.Component<UserPropsType> {

    componentDidMount() {
        axios
            .get('https://social-network.samuraijs.com/api/1.0/users')
            .then(res => this.props.setUsers(res.data.items))
    }

    render() {
        return <div>
            {
                this.props.usersPage.users.map((u) => <div key={u.id}>
                    <span>
                        <div>
                            <img src={u.photos.small ? u.photos.small : userPhoto} className={s.userPhoto}/>
                        </div>
                        <div>
                            {
                                u.followed
                                    ? <button onClick={() => this.props.unfollow(u.id)}>Unfollow</button>
                                    : <button onClick={() => this.props.follow(u.id)}>Follow</button>
                            }

                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{'u.location.city'}</div>
                            <div>{'u.location.country'}</div>
                        </span>
                    </span>
                </div>)
            }
        </div>
    }


}

export default Users;