import { RECEIVE_PHOTO, RECEIVE_PHOTOS, REMOVE_PHOTO } from '../actions/photo_actions';
import { RECEIVE_BUSINESS, RECEIVE_BUSINESSES } from '../actions/biz_actions';


const photosReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
    ;
  switch (action.type) {
    case RECEIVE_BUSINESSES:
    case RECEIVE_BUSINESS:
        ;
      return Object.assign({}, oldState, action.payload.photos);
    case RECEIVE_PHOTO:
        ;
      return Object.assign({}, oldState, { [action.payload.photo.id]: action.payload.photo, });
    case RECEIVE_PHOTOS:
      return Object.assign({}, oldState, action.payload.photos);
    case REMOVE_PHOTO:
        
      let newState = Object.assign({}, oldState);
      delete newState[action.payload.photo.id];
      return newState;
  
    default:
      return oldState;
  }

};

export default photosReducer;