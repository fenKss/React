import Users                                                                      from './Users';
import {followAC, setCurrentPageAC, setTotalUsersCountAc, setUsersAC, unfollowAC} from '../../../redux/usersReduser';
import {connect}                                                                  from 'react-redux';

const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize:state.usersPage.pageSize,
    totalUsersCount:state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onFollow  : (userId) => {
      dispatch(followAC(userId));
    },
    onUnfollow: (userId) => {
      dispatch(unfollowAC(userId));
    },
    setUsers  : (users) => {
      dispatch(setUsersAC(users));
    },
    setCurrentPage  : (page) => {
      dispatch(setCurrentPageAC(page));
    },
    setTotalUsersCount  : (count) => {
      dispatch(setTotalUsersCountAc(count));
    },
  };
};

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;