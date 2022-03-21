import { call, put, select } from '@redux-saga/core/effects';
import types from 'actions/types';
import { deleteFavouritedResult, insertFavouriteResult } from 'apis/favourited';
import { getPostResult, getPostsResult } from 'apis/post';

//GET_NEXT_WEBINARS
const OKGetNextWebinars = (payload) => {
  return {
    type: types.GET_NEXT_WEBINARS_SUCCESS,
    payload,
  };
};

const ErrGetNextWebinars = (message) => {
  return {
    type: types.GET_NEXT_WEBINARS_SUCCESS,
    globalMessage: {
      status: 'error',
      text: message,
    },
  };
};

export function* getNextWebinarsSaga({ payload }) {
  console.log("🚀 ~ file: webinarSaga.js ~ line 25 ~ function*getNextWebinarsSaga ~ payload", payload)
  try {
    const { data } = yield call(getPostsResult, { ...payload });
    console.log("🚀 ~ file: webinarSaga.js ~ line 28 ~ function*getNextWebinarsSaga ~ data", data[0])

    yield put(OKGetNextWebinars(data[0]));
  } catch (error) {
    const message = error.response?.data?.data?.message || error.message;

    yield put(ErrGetNextWebinars(message));
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
    const token = yield select(({ auth }) => auth.token);
    yield call(insertFavouriteResult, { token, ...payload });

    yield put(
      OKAddWebinar({
        targetId: payload.ids[0],
      })
    );
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
    const token = yield select(({ auth }) => auth.token);

    yield call(deleteFavouritedResult, { token, ...payload });
    yield put(
      OKDeleteWebinar({
        targetId: payload.id,
      })
    );
  } catch (error) {
    const message = error.response?.data?.data?.message || error.message;

    yield put(ErrDeleteWebinar(message));
  }
}

//GET_WEBINAR_DETAIL
const OKGetDetail = (payload) => {
  return {
    type: types.GET_WEBINAR_DETAIL_SUCCESS,
    payload,
  };
};

const ErrGetDetail = (message) => {
  return {
    type: types.GET_WEBINAR_DETAIL_ERROR,
    globalMessage: {
      status: 'error',
      text: message,
    },
  };
};

export function* getWebinarDetailSaga({ payload }) {
  try {
    const token = yield select(({ auth }) => auth.token);
    const { data } = yield call(getPostResult, { token, ...payload });

    yield put(OKGetDetail(data.data));
  } catch (error) {
    const message = error.response?.data?.data?.message || error.message;

    yield put(ErrGetDetail(message));
  }
}
