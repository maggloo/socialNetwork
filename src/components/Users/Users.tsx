import React from 'react';
import s from "./Users.module.css";
import userPhoto from "../../assets/imgs/default-pfp-19 (1).jpg";
import {initialStateUsersPageType} from "../../redux/users_reducer";
import {NavLink} from "react-router-dom";

type UsersType = initialStateUsersPageType & {
    follow: (userID: number) => void,
    unfollow: (userID: number) => void,
    onPageChanged: (pageNumber: number) => void
}

const Users = (props: UsersType) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    let curP = props.currentPage;
    let curPF = ((curP - 5) < 0) ? 0 : curP - 5;
    let curPL = curP + 5;
    let slicedPages = pages.slice(curPF, curPL);

    return (
        <div>
            <div>
                {slicedPages.map(el => <span key={el} onClick={(e) => props.onPageChanged(el)}
                                             className={props.currentPage === el ? s.selectedPage : ''}> {el} </span>)}
            </div>
            {
                props.users.map((u) => <div key={u.id}>
                    <span>
                        <div>
                            <NavLink to={'/profile/' + u.id}>
                                <img src={u.photos.small ? u.photos.small : userPhoto} className={s.userPhoto}/>
                            </NavLink>
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

export default Users;