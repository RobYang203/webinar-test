import constants from 'flux-constants';

export const syncActionTypes = [
  'START_FETCHING',
  'STOP_FETCHING',
  'SEND_MESSAGE',
  'INITIAL_WEBINARS',
  'INITIAL_WEBINAR_DETAIL'
];

export const basicAsyncActionTypes = [
  'LOGIN',
  'CHECK_USER_LOGIN',
  'LOGOUT',
  'REFRESH_WEBINARS',
  'GET_NEXT_WEBINARS',
  'ADD_USER_WEBINAR',
  'DELETE_USER_WEBINAR',
  'GET_WEBINAR_DETAIL',
];

const asyncActionTypes = basicAsyncActionTypes.reduce((result, actionType) => {
  return [
    ...result,
    actionType,
    `${actionType}_SUCCESS`,
    `${actionType}_ERROR`,
  ];
}, []);

export default constants([...syncActionTypes, ...asyncActionTypes]);
