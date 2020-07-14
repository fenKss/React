const SET_AUTH_DATA = `SET_AUTH_DATA`;

let initState = {
  isFetching: false,
  userId    : null,
  login     : null,
  isAuth    : false,
};

const authReduser = (state = initState, action) => {
  switch (action.type) {
    case SET_AUTH_DATA:

      const isAuth = !!action.user.userId;
      return {
        ...state,
        ...action.user,
        isAuth
      };
  }
  return state;
};
export default authReduser;

export const setAuthData = (userId, email, login) => ({ type: SET_AUTH_DATA,
  user                                                      : {
    userId,
    email,
    login,
  },
});


