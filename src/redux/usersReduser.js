const FOLLOW    = 'FOLLOW',
      UNFOLLOW  = 'UNFOLLOW',
      SET_USERS = `SET_USERS`,
      SET_CURRENT_PAGE = `SET_CURRENT_PAGE`,
      SET_TOTAL_USERS_COUNT = `SET_TOTAL_USERS_COUNT`;

let initState = {
  users: [],
  pageSize:3,
  totalUsersCount:0,
  currentPage:1
};
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
            };
          }
          return user;
        }),
      };
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map(user => {
          if (user.id === action.userId) {
            return {
              ...user,
              isFollowed: false,
            };
          }
          return user;
        }),
      };

    case SET_USERS:
      return {
        ...state,
        users: [
          ...action.users,
        ],
      };
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.currentPage
      }
    case SET_TOTAL_USERS_COUNT:
      return {
        ...state,
        totalUsersCount: action.totalUsersCount
      }
    default:
      return state;
  }
};

export default usersReducer;

export const followAC = (userId) => ({type: FOLLOW, userId: userId});
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId: userId});
export const setUsersAC = (users) => ({type: SET_USERS, users: users});
export const setCurrentPageAC = (page) => ({type: SET_CURRENT_PAGE, currentPage: page});
export const setTotalUsersCountAc = (count) => ({type: SET_TOTAL_USERS_COUNT, totalUsersCount: count});
