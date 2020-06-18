import React      from 'react';
import s          from './Users.module.css';
import * as axios from 'axios';
import userPhoto  from '../../../assets/user.png';

class Users extends React.Component {
  getUsers = () => {

    axios
        .get('https://127.0.0.1:8000/api/user')
        .then(response => {
          const users = response.data.data.users || [];
          this.props.setUsers(users);
        });
  };

  componentDidMount() {
    this.getUsers();
  }

  render = () => {
    return <div className={s.users}>
      {
        this.props
            .users
            .map(user =>
                     <div className={s.user}>
                       <div className={s.user_left}>
                         <img
                             src={user.photoUrl ? user.photoUrl : userPhoto}
                             alt=""/>
                       </div>
                       <div className={s.user_right}>
                         <div className={s.text}>
                           <span className={s.name}>{user.fullName}</span>
                           <span
                               className={s.location}>{user.location.country}, {user.location.city}</span>
                           <div className={s.status}>{user.status}</div>
                         </div>
                         {user.isFollowed
                          ?
                          <button
                              onClick={() => this.props.onUnfollow(user.id)}>Отписаться</button>
                          :
                          <button
                              onClick={() => this.props.onFollow(user.id)}>Подписаться</button>
                         }
                       </div>
                     </div>,
            )
      }
    </div>;
  };
}

export default Users;