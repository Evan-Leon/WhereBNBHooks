import * as SessionAPIUtils from '../utils/session_utils';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";

export const receiveCurrentUser = currentUser => ({
    type: RECEIVE_CURRENT_USER,
    currentUser 
});

export const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER
});

export const receiveSessionErrors = errors => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
})

export const createNewUser = user => dispatch =>(
  SessionAPIUtils.signup(user)
  .then(user => dispatch(receiveCurrentUser(user))
  , err => (dispatch(receiveSessionErrors(err.responseJSON))))
);

export const login = user => dispatch => (
  SessionAPIUtils.loginUser(user)
  .then(user => dispatch(receiveCurrentUser(user))
  , err => (dispatch(receiveSessionErrors(err.responseJSON))))
);

export const logout = () => dispatch => 
  SessionAPIUtils.logoutUser()
  .then(()=> dispatch(logoutCurrentUser()));