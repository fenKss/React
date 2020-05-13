import React from "react";
import {NavLink} from "react-router-dom";
import s from "./Navbar.module.css";

function Navbar() {
    return (
        <nav className={s.nav}>
            <NavLink to="/profile">Profile</NavLink>
            <NavLink to="/title">Title</NavLink>
            <NavLink to="/news">News</NavLink>
            <NavLink to="/dialogs">Dialogs</NavLink>
        </nav>
    )
}

export default Navbar;