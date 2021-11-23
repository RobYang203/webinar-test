import types from '../types';

export const getWebinarsAction = (payload) => {
  return {
    type: types.GET_WEBINARS,
    payload,
  };
};

export const addUserWebinarAction = (payload) => {
  return {
    type: types.ADD_USER_WEBINAR,
    payload,
  };
};

export const deleteUserWebinarAction = (payload) => {
  return {
    type: types.DELETE_USER_WEBINAR,
    payload,
  };
};
