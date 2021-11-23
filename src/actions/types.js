import constants from 'flux-constants';

export const syncActionTypes = [
  'START_FETCHING',
  'STOP_FETCHING',
  'SEND_MESSAGE',
];

export const basicAsyncActionTypes = [
  'LOGIN',
  'CHECK_USER_LOGIN',
  'LOGOUT',
  'GET_WEBINARS',
  'ADD_USER_WEBINAR',
  'DELETE_USER_WEBINAR',
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
