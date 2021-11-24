import types from 'actions/types';
import { authState } from './initialState';

const setUserLogin = (auth, { user, token }, isAuth) => {
  return {
    ...auth,
    user,
    token,
    isAuth,
  };
};

export default function authReducer(auth = authState, { type, payload }) {
  switch (type) {
    case types.CHECK_USER_LOGIN_SUCCESS:
    case types.LOGIN_SUCCESS:
      return setUserLogin(auth, payload, true);
    case types.LOGOUT_SUCCESS:
      return authState;
    case types.LOGOUT_ERROR:
    case types.LOGOUT:
    case types.CHECK_USER_LOGIN:
    case types.CHECK_USER_LOGIN_ERROR:
    case types.LOGIN_ERROR:
    case types.LOGIN:
    default:
      return auth;
  }
}
