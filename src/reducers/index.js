import { combineReducers } from 'redux';
import logReducer from './logReducer';
import techReducer from './techReducer';
import loginuserReducer from './loginuserReducer'

export default combineReducers({
  log: logReducer,
  tech: techReducer,
  login: loginuserReducer
});
