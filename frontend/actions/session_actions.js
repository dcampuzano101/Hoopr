import * as APIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_USER = "RECEIVE_USER";
export const RECEIVE_USERS = "RECEIVE_USERS"
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";
export const RECEIVE_CLEAR_ERRORS = "RECEIVE_CLEAR_ERRORS";


export const receiveCurrentUser = (payload) => {
  return({
    type: RECEIVE_CURRENT_USER,
    payload
  });
};

export const receiveUser = (payload) => {
  return({
    type: RECEIVE_USER,
    payload
  });
};

export const receiveUsers = (payload) => {
  return ({
    type: RECEIVE_USERS,
    payload
  });
};

export const requestUsers = () => dispatch => {
  return APIUtil.fetchUsers()
    .then((payload) => dispatch(receiveUsers(payload)));
};


export const requestUser = (userId) => dispatch => {
  return APIUtil.fetchUser(userId)
    .then((payload) => dispatch(receiveUser(payload)));
};

export const receiveClearErrors = () => {
  return ({
    type: RECEIVE_CLEAR_ERRORS,
  });
};

export const logoutCurrentUser = () => {
  
  return({  
    type: LOGOUT_CURRENT_USER
  });
};

export const receiveErrors = errors => {
  return({
    type: RECEIVE_SESSION_ERRORS,
    errors
  });
};


export const signup = user => dispatch => {

  return APIUtil.signup(user)
    .then(
      payload => dispatch(receiveCurrentUser(payload)),
      error => dispatch(receiveErrors(error))
    );
};

export const login = user => dispatch => {
    return APIUtil.login(user)
    .then(
      payload => dispatch(receiveCurrentUser(payload)),
      error => dispatch(receiveErrors(error))
    );
};

export const logout = () => dispatch => {
  
  return APIUtil.logout()
  .then(
    () => dispatch(logoutCurrentUser())
    );
};