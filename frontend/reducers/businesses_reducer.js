import { RECEIVE_BUSINESS, RECEIVE_BUSINESSES } from '../actions/biz_actions';
import { RECEIVE_REVIEW, REMOVE_REVIEW } from '../actions/review_actions';


const bizReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  
  switch (action.type) {
    case RECEIVE_BUSINESS:
      return Object.assign({}, oldState, { [action.payload.business.id]: action.payload.business });

    case RECEIVE_REVIEW:
      // debugger;
      return Object.assign({}, oldState, { [action.payload.business.id]: action.payload.business });
    
    case REMOVE_REVIEW:
      let newState = Object.assign({}, oldState);
      const newReviewIds = newState[action.payload.business.id].reviewIds.filter((id) => id !== action.payload.review.id);
      newState[action.payload.business.id].reviewIds = newReviewIds;
      return newState;

    

    case RECEIVE_BUSINESSES:
      
      return Object.assign({}, oldState, action.payload.businesses);
  
    default:
      return oldState;
  }
};

export default bizReducer;