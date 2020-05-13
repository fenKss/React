import React from "react";
import s from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = `/dialogs/${props.id}`;
    return (
        <div className={s.dialog}>

            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
};
const Message = (props) => {
    return (
        <div className={s.message}>{props.message}</div>
    )
}

const  Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogs_items}>
                <DialogItem name="Dima" id="1"/>
                <DialogItem name="Sveta" id="2"/>
                <DialogItem name="Sasha" id="3"/>
                <DialogItem name="Victor" id="4"/>
                <DialogItem name="Valera" id="5"/>
            </div>
            <div className={s.messages}>
                <Message message="Hi Dima"/>
                <Message message="Hi, how are you?"/>
                <Message message="Hi from fenK"/>
                <Message message="Hi bitch"/>
                <Message message="Hi yo"/>

            </div>
        </div>
    )
}

export default Dialogs;