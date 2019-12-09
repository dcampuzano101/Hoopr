import UsersReducer from './users_reducer';
import { combineReducers } from 'redux';

const RootReducer = combineReducers({
  users: UsersReducer
});

export default RootReducer;