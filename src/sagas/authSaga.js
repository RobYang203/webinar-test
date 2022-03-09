import { call, put, select } from '@redux-saga/core/effects';
import types from 'actions/types';
import {
  authCheckMeResult,
  authEmailLoginResult,
  authLogoutResult,
} from 'apis/auth';
import { getUserToken, removeUserToken, setUserToken } from 'utils/token';

//SIGNUP
const OKSignup = (payload) => {
  return {
    type: types.SIGNUP_SUCCESS,
    payload,
  };
};

const ErrSignup = (message) => {
  return {
    type: types.SIGNUP_ERROR,
    globalMessage: {
      status: 'error',
      text: message,
    },
  };
};

export function* signupSaga({ payload }) {
  try {
    const { data } = yield call(authEmailLoginResult, payload);

    yield put(OKSignup(data));
  } catch (error) {
    const message = error.response?.data?.data?.message || error.message;

    yield put(ErrSignup(message));
  }
}

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

const ErrCheck = () => {
  return {
    type: types.CHECK_USER_LOGIN_ERROR,
  };
};

export function* checkUserLoginSaga() {
  try {
    const token = getUserToken();

    if (!Boolean(token)) yield put(ErrCheck());
    else {
      const { data } = yield call(authCheckMeResult, { token });

      yield put(OKCheck({ ...data, token }));
    }
  } catch (error) {
    yield put(ErrCheck());
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

    removeUserToken();
    
    yield put(OKLogout(data));
  } catch (error) {
    const message = error.response?.data?.data?.message || error.message;

    yield put(ErrLogout(message));
  }
}
