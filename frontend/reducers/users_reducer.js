import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_REVIEW } from '../actions/review_actions';
import { RECEIVE_BUSINESS, RECEIVE_BUSINESSES } from '../actions/biz_actions';

const usersReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  debugger;
  switch (action.type) {
    case RECEIVE_BUSINESSES:
    case RECEIVE_BUSINESS:
      return Object.assign({}, oldState, action.payload.users );
    case RECEIVE_CURRENT_USER:
      return Object.assign({}, oldState, { [action.currentUser.id]: action.currentUser});
      // return Object.assign({}, oldState, { [action.payload.id]: action.payload});

    default:
      return oldState;
  }
};

export default usersReducer;
