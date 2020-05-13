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

const Dialogs = () => {
    let dialogsData = [
        {id: 1, name: "Dima"},
        {id: 2, name: "Sveta"},
        {id: 3, name: "Sasha"},
        {id: 4, name: "Victor"},
        {id: 5, name: "Valera"},

    ];
    let dialogElements = dialogsData.map(e => <DialogItem name={e.name} id={e.id}/>)
    let messagesData = [
        {id: 1, message: `Hi Dima`},
        {id: 2, message: `Hi, how are you?`},
        {id: 3, message: `Hi from fenK`},
        {id: 4, message: `Hi bitch`},
        {id: 5, message: `Hi yo`}
    ];
    let messagesElements = messagesData.map(e => <Message message={e.message}/>)
    return (
        <div className={s.dialogs}>
            <div className={s.dialogs_items}>
                {dialogElements}


            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    )
}

export default Dialogs;