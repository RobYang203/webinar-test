import { takeLatest } from 'redux-saga/effects';
import types from 'actions/types';
import { checkUserLoginSaga, loginSaga, logoutSaga } from './authSaga';
import {
  addUserWebinarSaga,
  deleteUserWebinarSaga,
  getNextWebinarsSaga,
  refreshWebinarsSaga,
} from './webinarSaga';

//auth
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
export function* watchGetRefreshWebinarsSaga() {
  yield takeLatest(types.REFRESH_WEBINARS, refreshWebinarsSaga);
}

export function* watchGetNextWebinarsSaga() {
  yield takeLatest(types.GET_NEXT_WEBINARS, getNextWebinarsSaga);
}

export function* watchAddUserWebinarSaga() {
  yield takeLatest(types.ADD_USER_WEBINAR, addUserWebinarSaga);
}

export function* watchDeleteUserWebinarSaga() {
  yield takeLatest(types.DELETE_USER_WEBINAR, deleteUserWebinarSaga);
}
