import { RECEIVE_BUSINESS, RECEIVE_BUSINESSES } from '../actions/biz_actions';


const bizReducer = (oldState = {}, action) => {
  Object.freeze(oldState);

  switch (action.type) {
    case RECEIVE_BUSINESS:
      return Object.assign({}, oldState, { [action.business.id]: action.business });

    case RECEIVE_BUSINESSES:
      debugger;
      return Object.assign({}, oldState, action.businesses);
  
    default:
      return oldState;
  }
};

export default bizReducer;