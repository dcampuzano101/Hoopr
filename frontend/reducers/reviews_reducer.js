import { RECEIVE_REVIEW } from '../actions/review_actions';
import { RECEIVE_BUSINESS } from '../actions/biz_actions';


const reviewsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);

  switch (action.type) {
    case RECEIVE_BUSINESS:
      return Object.assign({}, oldState, action.payload.reviews);
    case RECEIVE_REVIEW:
      return Object.assign({}, oldState, { [action.payload.review.id]: action.payload.review });
  
    default:
      return oldState;
  }

};

export default reviewsReducer;