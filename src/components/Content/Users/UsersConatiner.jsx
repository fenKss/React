import Users from './Users';
import {followAC, setUsersAC, unfollowAC} from '../../../redux/usersReduser';
import {connect} from 'react-redux';

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        onFollow: (userId) => {
            dispatch(followAC(userId))
        },
        onUnfollow: (userId) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        },
    }
}


const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default UsersContainer;