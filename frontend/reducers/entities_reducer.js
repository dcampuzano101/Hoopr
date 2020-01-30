import { combineReducers } from 'redux';

import usersReducer from './users_reducer';
import bizReducer from './businesses_reducer';
import reviewsReducer from './reviews_reducer';
import searchReducer from './search_reducer';


const entitiesReducer = combineReducers({
  users: usersReducer,
  businesses: bizReducer,
  reviews: reviewsReducer,
  search: searchReducer
});

export default entitiesReducer;