import React from "react";
import s from "../Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";

const DialogItems = (props) => {

    let dialogElements = props.dialogs.map(e => <DialogItem name={e.name} id={e.id}/>)

    return (
        <div className={s.dialogs_items}>
            {dialogElements}
        </div>
    )
}
export default DialogItems;