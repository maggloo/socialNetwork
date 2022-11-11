import React from 'react';
import s from "./Header.module.css";

function Header(props: any) {
    return(
        <header className={s.header}>
            <img src={"https://www.logolynx.com/images/logolynx/b4/b49bdba462022ca2d43811d680617190.jpeg"}></img>
        </header>
    )
}

export default Header;