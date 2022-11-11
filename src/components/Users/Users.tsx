import React, {useEffect} from 'react';
import s from './Users.module.css'
import {UserPropsType} from "./UsersContainer";
import axios from "axios";
import userPhoto from '../../assets/imgs/default-pfp-19 (1).jpg'

/*
const Users = (props: UserPropsType) => {


    useEffect(() => {
        if (props.usersPage.users.length === 0) {
            axios
                .get('https://social-network.samuraijs.com/api/1.0/users')
                .then(res => props.setUsers(res.data.items))
        }
    }, [])


    return (
        <div>
            {
                props.usersPage.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <img src={u.photos.small ? u.photos.small : userPhoto} className={s.userPhoto}/>
                        </div>
                        <div>
                            {
                                u.followed
                                    ? <button onClick={() => props.unfollow(u.id)}>Unfollow</button>
                                    : <button onClick={() => props.follow(u.id)}>Follow</button>
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
    );
};

export default Users;*/
