import { RECEIVE_REVIEW } from '../actions/review_actions';
import { RECEIVE_BUSINESS, RECEIVE_BUSINESSES } from '../actions/biz_actions';


const reviewsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  // debugger;
  switch (action.type) {
    case RECEIVE_BUSINESSES:
    case RECEIVE_BUSINESS:
      return Object.assign({}, oldState, action.payload.reviews);
    case RECEIVE_REVIEW:
      return Object.assign({}, oldState, { [action.payload.review.id]: action.payload.review });
  
    default:
      return oldState;
  }

};

export default reviewsReducer;