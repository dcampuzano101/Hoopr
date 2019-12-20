import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_REVIEW } from '../actions/review_actions';
import { RECEIVE_BUSINESS, RECEIVE_BUSINESSES } from '../actions/biz_actions';

const usersReducer = (oldState = {}, action) => {
  Object.freeze(oldState);

  switch (action.type) {
    case RECEIVE_BUSINESSES:
    case RECEIVE_BUSINESS:
      return Object.assign({}, oldState, action.payload.users );
    // case RECEIVE_REVIEW:
    //   return Object.assign({}, oldState, { [action.payload.user.id]: action.payload.user });
    case RECEIVE_CURRENT_USER:
      return Object.assign({}, oldState, { [action.currentUser.id]: action.currentUser});

    default:
      return oldState;
  }
};

export default usersReducer;
