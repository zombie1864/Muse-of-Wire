import * as APIUtil from '../util/session_api_util';
import jwt_decode from 'jwt-decode';

export const RECEIVE_USER_LOGOUT = "RECEIVE_USER_LOGOUT";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";
export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_USER_SIGN_IN = "RECEIVE_USER_SIGN_IN";
export const CLEAR_SESSION_ERRORS = "CLEAR_SESSION_ERRORS";

export const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

export const receiveUserSignIn = () => {
  return {
    type: RECEIVE_USER_SIGN_IN
}};

export const receiveErrors = errors => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
});

export const logoutUser = () => ({
  type: RECEIVE_USER_LOGOUT
});

export const clearSessionErrors = () => ({
  type: CLEAR_SESSION_ERRORS
});

export const signup = (user) => (dispatch) => { 
  return APIUtil.signup(user)
    .then(() => dispatch(login(user)))
    .catch(err => dispatch(receiveErrors(err.response.data)))
};

export const login = (user) => (dispatch) =>
  APIUtil.login(user)
    .then((res) => {
      const { token } = res.data;
      localStorage.setItem("jwtToken", token);
      APIUtil.setAuthToken(token);
      const decoded = jwt_decode(token);
      dispatch(receiveCurrentUser(decoded));
    })
    .catch((err) => {
      
      dispatch(receiveErrors(err.response.data));
    });


export const logout = () => dispatch => {
  // delete token from localStorage
  localStorage.removeItem('jwtToken');
  // delete token from axios request headers
  APIUtil.setAuthToken(false);
  dispatch(logoutUser());
};