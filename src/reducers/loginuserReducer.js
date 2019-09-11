import {
  ADD_LOGIN_USER,
  ADD_LOGIN_USER_ERR,
  GET_LOGINUSER,
  GET_USER_ERROR

} from '../actions/types';

const initialState = {
  loginusers: [],
  loading: false,
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_LOGIN_USER:
      return {
        ...state,
        loginusers: action.payload,
        loading: false
      };
    case ADD_LOGIN_USER_ERR:
    case GET_USER_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false
      };
    case GET_LOGINUSER:
      return {
        ...state,
        loginusers: action.payload,
        loading: false
      };
    
    default:
      return state;
  }
};
