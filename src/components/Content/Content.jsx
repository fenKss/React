import React from 'react';
import s from './Content.module.css';
import {Route} from 'react-router-dom';
import Profile from './Profile/Profile';
import DialogsContainer from './Dialogs/DialogsContainer';
import UsersContainer from './Users/UsersConatiner';

const Content = () => {
    return (
        <div className={s.content}>
            <Route path="/profile">
                <Profile/>
            </Route>
            <Route path="/title">Титульная</Route>
            <Route path="/news">Новости</Route>
            <Route path="/dialogs">
                <DialogsContainer />
            </Route>
            <Route path="/users">
                <UsersContainer />
            </Route>
        </div>
    )
}

export default Content;