import { RECEIVE_CURRENT_USER, RECEIVE_USER, RECEIVE_USERS } from '../actions/session_actions';
import { RECEIVE_REVIEW, REMOVE_REVIEW } from '../actions/review_actions';
import { RECEIVE_BUSINESS, RECEIVE_BUSINESSES } from '../actions/biz_actions';

const usersReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_USER:
      return Object.assign({}, oldState, { [action.payload.id]: action.payload });
    case RECEIVE_USERS:
      return Object.assign({}, oldState, action.payload.users);
    // case RECEIVE_REVIEW:
    //   return Object.assign({}, oldState, { [action.payload.user.id]: action.payload.user });

    // case REMOVE_REVIEW:
    //   let newState = Object.assign({}, oldState);
    //   const newReviewIds = newState[action.payload.user.id].reviewIds.filter((id) => id !== action.payload.review.id);
    //   newState[action.payload.user.id].reviewIds = newReviewIds;
    //   return newState;


    case RECEIVE_BUSINESSES:
      // return Object.assign({}, oldState, action.payload.businesses);
    case RECEIVE_BUSINESS:
      return Object.assign({}, oldState, action.payload.users );
    case RECEIVE_CURRENT_USER:
      // return Object.assign({}, oldState, { [action.currentUser.id]: action.currentUser});
      return Object.assign({}, oldState, { [action.payload.id]: action.payload});

    default:
      return oldState;
  }
};

export default usersReducer;
