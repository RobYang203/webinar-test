import types from '../types';

export const initialWebinarAction = () => {
  return {
    type: types.INITIAL_WEBINARS,
  };
};

export const getWebinarsAction = (payload) => {
  return {
    type: types.GET_WEBINARS,
    payload: {
      ...payload,
      per_page: 12,
    },
  };
};

export const addUserWebinarAction = (payload) => {
  return {
    type: types.ADD_USER_WEBINAR,
    payload: {
      ...payload,
      model: 'post',
    },
  };
};

export const deleteUserWebinarAction = (payload) => {
  return {
    type: types.DELETE_USER_WEBINAR,
    payload,
  };
};
