import React from "react";
import s from "./Dialogs.module.css";
import {NavLink, Route} from "react-router-dom";

function Dialogs() {
    return (
        <div className={s.dialogs}>
                <div className={s.dialogs_items}>
                    <div className={s.dialog}>
                        <NavLink to="/dialogs/1">Dima</NavLink>
                    </div>
                    <div className={s.dialog + ` ` +s.active}>
                        <NavLink to="/dialogs/2">Andrey</NavLink>
                    </div>
                    <div className={s.dialog}>
                        <NavLink to="/dialogs/3">Sveta</NavLink>
                    </div>
                    <div className={s.dialog}>
                        <NavLink to="/dialogs/4">Sasha</NavLink>
                    </div>
                    <div className={s.dialog}>
                        <NavLink to="/dialogs/5">Victor</NavLink>
                    </div>
                    <div className={s.dialog}>
                        <NavLink to="/dialogs/6">Valera</NavLink>
                    </div>
                </div>
            <div className={s.messages}>
                <div className={s.message}>Hi Dima</div>
                <div className={s.message}>Hi, how are you?</div>
                <div className={s.message}>Hi from fenK</div>
                <div className={s.message}>Hi bitch</div>
                <div className={s.message}>Hi yo</div>
                <div className={s.message}>H</div>
            </div>
        </div>
    )
}

export default Dialogs;