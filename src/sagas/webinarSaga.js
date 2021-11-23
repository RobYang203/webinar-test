import { call, put, select } from '@redux-saga/core/effects';
import types from 'actions/types';
import { deleteFavouriteResult, insertFavouriteResult } from 'apis/favourited';
import { getPostsResult } from 'apis/post';

//GET_WEBINARS
const OKGetWebinars = (payload) => {
  return {
    type: types.GET_WEBINARS_SUCCESS,
    payload,
  };
};

const ErrGetWebinars = (message) => {
  return {
    type: types.GET_WEBINARS_SUCCESS,
    globalMessage: {
      status: 'error',
      text: message,
    },
  };
};

export function* getWebinarsSaga({ payload }) {
  try {
    const token = select(({ auth }) => auth.token);
    const { data } = yield call(getPostsResult, { token, ...payload });

    yield put(OKGetWebinars(data));
  } catch (error) {
    const message = error.response?.data?.data?.message || error.message;

    yield put(ErrGetWebinars(message));
  }
}

//ADD_USER_WEBINAR
const OKAddWebinar = (payload) => {
  return {
    type: types.ADD_USER_WEBINAR_SUCCESS,
    payload,
  };
};

const ErrAddWebinar = (message) => {
  return {
    type: types.ADD_USER_WEBINAR_ERROR,
    globalMessage: {
      status: 'error',
      text: message,
    },
  };
};

export function* addUserWebinarSaga({ payload }) {
  try {
    const token = select((auth) => auth.token);
    yield call(insertFavouriteResult, { token, ...payload });

    yield put(OKAddWebinar(payload));
  } catch (error) {
    const message = error.response?.data?.data?.message || error.message;

    yield put(ErrAddWebinar(message));
  }
}

//DELETE_USER_WEBINAR
const OKDeleteWebinar = (payload) => {
  return {
    type: types.DELETE_USER_WEBINAR_SUCCESS,
    payload,
  };
};

const ErrDeleteWebinar = (message) => {
  return {
    type: types.DELETE_USER_WEBINAR_ERROR,
    globalMessage: {
      status: 'error',
      text: message,
    },
  };
};

export function* deleteUserWebinarSaga({ payload }) {
  try {
    const token = select((auth) => auth.token);
    yield call(deleteFavouriteResult, { token, payload });

    yield put(OKDeleteWebinar(payload));
  } catch (error) {
    const message = error.response?.data?.data?.message || error.message;

    yield put(ErrDeleteWebinar(message));
  }
}
