import types from '../types';

export const startFetchingAction = (actionType) => ({
  type: types.START_FETCHING,
  payload: actionType,
});

export const stopFetchingAction = (actionType) => ({
  type: types.STOP_FETCHING,
  payload: actionType,
});

export const sendMessageAction = (status, text) => ({
  type: types.SEND_MESSAGE,
  payload: {
    status,
    text,
  },
});