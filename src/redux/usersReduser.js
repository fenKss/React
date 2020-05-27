const FOLLOW = 'FOLLOW',
    UNFOLLOW = 'UNFOLLOW',
    SET_USERS = `SET_USERS`;

let initState = {
    users:[],
}
const usersReducer = (state = initState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: [...state.users].map(user => {
                    if (user.id === action.userId) {
                        return {
                            ...user,
                            isFollowed: true,
                        }
                    }
                    return user;
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return {
                            ...user,
                            isFollowed: false,
                        }
                    }
                    return user;
                })
            }

        case SET_USERS:
            return {
                ...state,
                users: [
                    ...state.users,
                    ...action.users
                ]
            }
        default:
            return state;
    }
}

export default usersReducer;


export const followAC = (userId) => ({type: FOLLOW, userId: userId});
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId: userId});

export const setUsersAC = (users) => ({type: SET_USERS, users: users});
