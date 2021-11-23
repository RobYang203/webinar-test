import { userState } from './initialState';

export default function userReducer(user = userState, { type, payload }) {
  switch (type) {
    default:
      return user;
  }
}
