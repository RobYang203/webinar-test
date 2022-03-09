import { takeLatest } from 'redux-saga/effects';
import types from 'actions/types';
import {
  checkUserLoginSaga,
  loginSaga,
  logoutSaga,
  signupSaga,
} from './authSaga';
import {
  addUserWebinarSaga,
  deleteUserWebinarSaga,
  getNextWebinarsSaga,
  getWebinarDetailSaga,
} from './webinarSaga';

//auth
export function* watchSignupSaga() {
  yield takeLatest(types.SIGNUP, signupSaga);
}

export function* watchLoginSaga() {
  yield takeLatest(types.LOGIN, loginSaga);
}

export function* watchCheckUserLoginSaga() {
  yield takeLatest(types.CHECK_USER_LOGIN, checkUserLoginSaga);
}

export function* watchLogoutSaga() {
  yield takeLatest(types.LOGOUT, logoutSaga);
}

//webinars
export function* watchGetNextWebinarsSaga() {
  yield takeLatest(types.GET_NEXT_WEBINARS, getNextWebinarsSaga);
}

export function* watchAddUserWebinarSaga() {
  yield takeLatest(types.ADD_USER_WEBINAR, addUserWebinarSaga);
}

export function* watchDeleteUserWebinarSaga() {
  yield takeLatest(types.DELETE_USER_WEBINAR, deleteUserWebinarSaga);
}

export function* watchGetWebinarDetailSaga() {
  yield takeLatest(types.GET_WEBINAR_DETAIL, getWebinarDetailSaga);
}
