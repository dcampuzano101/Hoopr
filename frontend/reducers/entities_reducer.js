import { combineReducers } from 'redux';

import usersReducer from './users_reducer';
import bizReducer from './businesses_reducer';
import reviewsReducer from './reviews_reducer';
import searchReducer from './search_reducer';
import photosReducer from './photos_reducer';


const entitiesReducer = combineReducers({
  users: usersReducer,
  businesses: bizReducer,
  reviews: reviewsReducer,
  photos: photosReducer,
  search: searchReducer
});

export default entitiesReducer;