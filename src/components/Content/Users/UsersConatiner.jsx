import {follow, setCurrentPage, setTotalUsersCount, setUsers, unfollow} from '../../../redux/usersReduser';
import {connect}                                                                  from 'react-redux';
import React                                                                      from 'react';
import * as axios                                                                 from 'axios';
import Users                                                                      from './Users';

class UsersContainer extends React.Component {
  getUsers = () => {
    // axios.defaults.headers.common['Accept'] = 'application/ld+json'
    axios.get(
        `https://127.0.0.1:8000/api/users?page=${this.props.currentPage}&itemsPerPage=${this.props.pageSize}`).
        then(response => {
          const users = response.data[`hydra:member`] || [];
          const count = response.data[`hydra:totalItems`] || 0;
          this.props.setUsers(users);
          this.props.setTotalUsersCount(count);
        });
  };

  componentDidMount() {
    this.getUsers();
  }

  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    axios.get(
        `https://127.0.0.1:8000/api/users?page=${pageNumber}&itemsPerPage=${this.props.pageSize}`).
        then(response => {
          const users = response.data[`hydra:member`] || [];
          this.props.setUsers(users);
        });

  };
  render = () => <Users users={this.props.users}
                        totalUsersCount={this.props.totalUsersCount}
                        currentPage={this.props.currentPage}
                        pageSize={this.props.pageSize}
                        onPageChanged={this.onPageChanged}
                        onFollow={this.props.follow}
                        onUnfollow={this.props.unfollow}
  />;

}

const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize:state.usersPage.pageSize,
    totalUsersCount:state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
  };
};
const mapDispatchToProps = {follow,unfollow,setUsers,setCurrentPage,setTotalUsersCount};

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);

