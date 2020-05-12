import React from "react";
import s from "./header.module.css";
function Header() {
    return (
        <header>
            <div className={s.wrapper}>
                    <div className={s.title}>Blog</div>
                <div className={s.description}>About something</div>
            </div>
        </header>
    )
}

export default Header;