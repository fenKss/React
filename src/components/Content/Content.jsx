import React from "react";
import s from "./Content.module.css";
import {Route} from "react-router-dom";
import Profile from "../Profile/Profile";
import DialogsContainer from '../Dialogs/DialogsContainer';

const  Content = (props) => {
    return (
        <div className={s.content}>
            <Route path="/profile">
                <Profile store={props.store}/>
            </Route>
            <Route path="/title">Титульная</Route>
            <Route path="/news">Новости</Route>
            <Route path="/dialogs">
                <DialogsContainer store={props.store} />
            </Route>
        </div>
    )
}

export default Content;