import React       from 'react';
import s           from './Users.module.scss';
import userPhoto   from '../../../assets/user.png';
import { NavLink } from 'react-router-dom';
import Path        from '../../Common/Path/Path';

const Users = (props) => {
  const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  const pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  return (
    <div className={s.users}>
      {/*<Preloader/>*/}
     <Path totalUsersCount={props.totalUsersCount}
           pageSize={props.pageSize}
           currentPage={props.currentPage}
           onPageChanged={props.onPageChanged} />
      {

        props.users.map(user =>
          <div className={s.user} key={user.id}>
            <div className={s.user_left}>
              <NavLink to={`/profile/${user.id}`}>
                <img src={user.photoUrl ? user.photoUrl : userPhoto} alt=""/>
              </NavLink>
            </div>
            <div className={s.user_right}>
              <div className={s.text}>
                <span className={s.name}>{user.name}</span>
                <span
                  className={s.location}>{user.country}, {user.city}</span>
                <div className={s.status}>{user.status}</div>
              </div>
              {user.isFollowed
               ?
               <button
                 onClick={() => props.onUnfollow(user.id)}>Отписаться</button>
               :
               <button
                 onClick={() => props.onFollow(user.id)}>Подписаться</button>
              }
            </div>
          </div>,
        )
      }
    </div>
  );
}

export default Users;