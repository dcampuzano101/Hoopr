import {
  RECEIVE_SESSION_ERRORS,
  RECEIVE_CURRENT_USER,
  RECEIVE_CLEAR_ERRORS
} from '../actions/session_actions';


const sessionErrorsReducer = (state = [], action) => {
  Object.freeze(state);
  
  switch (action.type) {
    case RECEIVE_SESSION_ERRORS:
      debugger;
      return action.errors.responseJSON;
    case RECEIVE_CLEAR_ERRORS:
      return [];
    case RECEIVE_CURRENT_USER:
      return [];
    default:
      return state;
  }
};

export default sessionErrorsReducer;