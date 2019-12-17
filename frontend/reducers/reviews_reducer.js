import { RECEIVE_REVIEW } from '../actions/review_actions';


const reviewsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);

  switch (action.type) {
    case RECEIVE_REVIEW:
      return Object.assign({}, oldState, { [action.review.id]: action.review });
  
    default:
      return oldState;
  }

};

export default reviewsReducer;