import { RECEIVE_REVIEW, REMOVE_REVIEW } from '../actions/review_actions';
import { RECEIVE_BUSINESS, RECEIVE_BUSINESSES } from '../actions/biz_actions';


const reviewsReducer = (oldState = {}, action) => {
  debugger;
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_BUSINESSES:
    case RECEIVE_BUSINESS:
      return Object.assign({}, oldState, action.payload.reviews);
    case RECEIVE_REVIEW:
      debugger;
      return Object.assign({}, oldState, { [action.payload.review.id]: action.payload.review, });
    case REMOVE_REVIEW:
      debugger;
      let newState = Object.assign({}, oldState);
      delete newState[action.payload.review.id];
      return newState;
  
    default:
      return oldState;
  }

};

export default reviewsReducer;