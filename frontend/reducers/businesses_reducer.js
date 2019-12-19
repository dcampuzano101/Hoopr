import { RECEIVE_BUSINESS, RECEIVE_BUSINESSES } from '../actions/biz_actions';


const bizReducer = (oldState = {}, action) => {
  Object.freeze(oldState);

  switch (action.type) {
    case RECEIVE_BUSINESS:
      return Object.assign({}, oldState, { [action.payload.business.id]: action.payload.business });

    case RECEIVE_BUSINESSES:
      
      return Object.assign({}, oldState, action.payload.businesses);
  
    default:
      return oldState;
  }
};

export default bizReducer;