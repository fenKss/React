import React            from 'react';
import s                from './Content.module.scss';
import { Route }        from 'react-router-dom';
import DialogsContainer from './Dialogs/DialogsContainer';
import UsersContainer   from './Users/UsersConatiner';
import ProfileContainer from './Profile/ProfileContainer';

const Content = () => {
  return (
      <div className={s.content}>
        <Route path="/profile">
          <ProfileContainer/>
        </Route>
        <Route path="/title">Титульная</Route>
        <Route path="/news">Новости</Route>
        <Route path="/dialogs">
          <DialogsContainer/>
        </Route>
        <Route path="/users">
          <UsersContainer/>
        </Route>
      </div>
  );
};

export default Content;