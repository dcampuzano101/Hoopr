import { combineReducers } from 'redux';

import usersReducer from './users_reducer';
import bizReducer from './businesses_reducer';

const entitiesReducer = combineReducers({
  users: usersReducer,
  businesses: bizReducer
});

export default entitiesReducer;