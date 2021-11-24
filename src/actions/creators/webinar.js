import types from '../types';

export const initialWebinarsAction = () => {
  return {
    type: types.INITIAL_WEBINARS,
  };
};

export const getNextWebinarsAction = (payload) => {
  return {
    type: types.GET_NEXT_WEBINARS,
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

export const getWebinarDetailAction = (payload) => {
  return {
    type: types.GET_WEBINAR_DETAIL,
    payload,
  };
};

export const initialWebinarDetailAction = () => {
  return {
    type: types.INITIAL_WEBINAR_DETAIL,
  };
};