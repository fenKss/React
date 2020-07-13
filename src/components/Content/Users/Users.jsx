import React      from 'react';
import s          from './Users.module.scss';
import * as axios from 'axios';
import userPhoto  from '../../../assets/user.png';

class Users extends React.Component {
  getUsers = () => {
    // axios.defaults.headers.common['Accept'] = 'application/ld+json'
    axios
        .get(`https://127.0.0.1:8001/api/users?page=${this.props.currentPage}&itemsPerPage=${this.props.pageSize}`)
        .then(response => {
          const users = response.data[`hydra:member`] || [];
          const count = response.data[`hydra:totalItems`] || 0;
          this.props.setUsers(users);
          this.props.setTotalUsersCount(count);
        });
  };



  componentDidMount() {
    this.getUsers();
  }
  onPageChanged = (pageNumber) =>{
    this.props.setCurrentPage(pageNumber);
    console.log(this.props.currentPage, pageNumber);
    // this.getUsers();
    axios
    .get(`https://127.0.0.1:8001/api/users?page=${pageNumber}&itemsPerPage=${this.props.pageSize}`)
    .then(response => {
      const users = response.data[`hydra:member`] || [];
      this.props.setUsers(users);
    });

  }
  render = () => {
    const pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
    const pages = [];
    for (let i=1;i<=pagesCount;i++){
      pages.push(i);
    }
    return <div className={s.users}>
      <div>
        {
          pages.map(p => <span onClick={() =>{this.onPageChanged(p)}} className={this.props.currentPage === p && s.selected_page}>{p}</span>)
        }
        {/*<span className={s.selected_page}>1</span>*/}
        {/*<span>2</span>*/}
        {/*<span>3</span>*/}
        {/*<span>4</span>*/}
        {/*<span>5</span>*/}
      </div>
      {

        this.props
            .users
            .map(user =>
                     <div className={s.user} key={user.id}>
                       <div className={s.user_left}>
                         <img
                             src={user.photoUrl ? user.photoUrl : userPhoto}
                             alt=""/>
                       </div>
                       <div className={s.user_right}>
                         <div className={s.text}>
                           <span className={s.name}>{user.fullName}</span>
                           <span
                               className={s.location}>{user.country}, {user.city}</span>
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