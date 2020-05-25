import React from "react";
import s from "./Content.module.css";
import {Route} from "react-router-dom";
import Dialogs from "../Dialogs/Dialogs";
import Profile from "../Profile/Profile";
import {changeTextPost} from '../../redux/state';

const  Content = (props) => {
    return (
        <div className={s.content}>
            <Route path="/profile"><Profile state={props.content.profilePage} addPost={props.addPost} changeTextPost={props.changeTextPost}/></Route>
            <Route path="/title">Титульная</Route>
            <Route path="/news">Новости</Route>
            <Route path="/dialogs"><Dialogs state={props.content.dialogsPage} /></Route>
        </div>
    )
}

export default Content;