import { combineReducers } from 'redux';
import setting from './settingReducer';
import auth from './authReducer';
import webinar from './webinarReducer';

const appReducer = combineReducers({
  auth,
  setting,
  webinar,
});

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

export default rootReducer;
