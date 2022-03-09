import types from '../types';

export const signupAction = (payload) => {
  return {
    type: types.SIGNUP,
    payload,
  };
};

export const loginAction = (payload) => {
  return {
    type: types.LOGIN,
    payload,
  };
};

export const checkUserLoginAction = () => {
  return {
    type: types.CHECK_USER_LOGIN,
  };
};

export const logoutAction = () => {
  return {
    type: types.LOGOUT,
  };
};