import { webinarState } from './initialState';

export default function webinarReducer(
  webinar = webinarState,
  { type, payload }
) {
  switch (type) {
    default:
      return webinar;
  }
}
