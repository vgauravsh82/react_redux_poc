import {
  GET_TECHS,
  ADD_TECH,
  DELETE_TECH,
  SET_LOADING,
  TECHS_ERROR,
  ADD_LOGIN_USER,
  ADD_LOGIN_USER_ERR,
  GET_LOGINUSER,
  GET_USER_ERROR

} from './types';

// Get techs from server
export const getTechs = () => async dispatch => {
  try {
    setLoading();

    const res = await fetch('/techs');
    const data = await res.json();

    dispatch({
      type: GET_TECHS,
      payload: data
    });
  } catch (err) {
    dispatch({
      type: TECHS_ERROR,
      payload: err.response.statusText
    });
  }
};

// Get techs from server
export const getLoginUsers = () => async dispatch => {
  try {
    setLoading();

    const res = await fetch('/loginuser');
    const data = await res.json();

    dispatch({
      type: GET_LOGINUSER,
      payload: data
    });
  } catch (err) {
    dispatch({
      type: GET_USER_ERROR,
      payload: err.response.statusText
    });
  }
};


// Add technician to server
export const addTech = tech => async dispatch => {
  try {
    setLoading();

    const res = await fetch('/techs', {
      method: 'POST',
      body: JSON.stringify(tech),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const data = await res.json();

    dispatch({
      type: ADD_TECH,
      payload: data
    });
  } catch (err) {
    dispatch({
      type: TECHS_ERROR,
      payload: err.response.statusText
    });
  }
};


// Add technician to server
export const addLoginUser = user => async dispatch => {
  try {
    setLoading();

    const res = await fetch('/loginuser', {
      method: 'POST',
      body: JSON.stringify(user),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const data = await res.json();

    dispatch({
      type: ADD_LOGIN_USER,
      payload: data
    });
  } catch (err) {
    dispatch({
      type: ADD_LOGIN_USER_ERR,
      payload: err.response.statusText
    });
  }
};



export const deleteTech = id => async dispatch => {
  try {
    setLoading();

    await fetch(`/techs/${id}`, {
      method: 'DELETE'
    });

    dispatch({
      type: DELETE_TECH,
      payload: id
    });
  } catch (err) {
    dispatch({
      type: TECHS_ERROR,
      payload: err.response.statusText
    });
  }
};

// Set loading to true
export const setLoading = () => {
  return {
    type: SET_LOADING
  };
};
