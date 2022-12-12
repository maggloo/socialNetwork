import React from 'react';
import s from "./Header.module.css";
import {NavLink} from "react-router-dom";


type HeaderPropsType = {
    isAuth: boolean,
    login: string,
    logoutUserTC: () => void
}

function Header(props: HeaderPropsType) {
    return(
        <header className={s.header}>
            <img src={"https://www.logolynx.com/images/logolynx/b4/b49bdba462022ca2d43811d680617190.jpeg"}></img>
            <div className={s.loginBlock}>
                {props.isAuth
                    ? <div>{props.login}   <span onClick={props.logoutUserTC}>Logout</span></div>
                    : <NavLink to={'/login'}>Login</NavLink>
                }
            </div>
        </header>
    )
}

export default Header;