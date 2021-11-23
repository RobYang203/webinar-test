import { authState } from './initialState';

export default function authReducer(auth = authState, { type, payload }) {
  switch (type) {
    default:
      return auth;
  }
}
