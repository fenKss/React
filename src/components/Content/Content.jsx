import React from "react";
import s from "./Content.module.css";
import {Route} from "react-router-dom";
import Dialogs from "../Dialogs/Dialogs";
function Content() {
    return (
        <div className={s.content}>
            <Route path="/title">Титульная</Route>
            <Route path="/news">Новости</Route>
            <Route path="/dialogs"><Dialogs /></Route>
        </div>
    )
}

export default Content;