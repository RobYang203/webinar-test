import { combineReducers } from 'redux';
import setting from './settingReducer';
import user from './userReducer';
import webinar from './webinarReducer';

const appReducer = combineReducers({
  user,
  setting,
  webinar,
});

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

export default rootReducer;
