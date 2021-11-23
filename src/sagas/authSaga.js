import { call, put, select } from '@redux-saga/core/effects';
import types from 'actions/types';
import {
  authCheckMeResult,
  authEmailLoginResult,
  authLogoutResult,
} from 'apis/auth';
import { getUserToken, setUserToken } from 'utils';

//LOGIN
const OKLogin = (payload) => {
  return {
    type: types.LOGIN_SUCCESS,
    payload,
  };
};

const ErrLogin = (message) => {
  return {
    type: types.LOGIN_ERROR,
    globalMessage: {
      status: 'error',
      text: message,
    },
  };
};

export function* loginSaga({ payload }) {
  try {
    const { data } = yield call(authEmailLoginResult, payload);

    setUserToken(data.token);

    yield put(OKLogin(data));
  } catch (error) {
    const message = error.response?.data?.data?.message || error.message;

    yield put(ErrLogin(message));
  }
}

//CHECK_USER_LOGIN
const OKCheck = (payload) => {
  return {
    type: types.CHECK_USER_LOGIN_SUCCESS,
    payload,
  };
};

const ErrCheck = (message) => {
  return {
    type: types.CHECK_USER_LOGIN_ERROR,
    globalMessage: {
      status: 'error',
      text: message,
    },
  };
};

export function* checkUserLoginSaga() {
  try {
    const token = getUserToken();
    const { data } = yield call(authCheckMeResult, { token });

    yield put(OKCheck({ ...data, token }));
  } catch (error) {
    const message = error.response?.data?.data?.message || error.message;

    yield put(ErrCheck(message));
  }
}

//LOGOUT
const OKLogout = (payload) => {
  return {
    type: types.LOGOUT_SUCCESS,
    payload,
  };
};

const ErrLogout = (message) => {
  return {
    type: types.LOGOUT_ERROR,
    globalMessage: {
      status: 'error',
      text: message,
    },
  };
};

export function* logoutSaga() {
  try {
    const token = yield select(({ auth }) => auth.token);
    
    const { data } = yield call(authLogoutResult, { token });

    yield put(OKLogout(data));
  } catch (error) {
    const message = error.response?.data?.data?.message || error.message;

    yield put(ErrLogout(message));
  }
}
