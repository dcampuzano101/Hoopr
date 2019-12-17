import { combineReducers } from 'redux';
import entitiesReducer from './entities_reducer';
import sessionReducer from './session_reducer';
import errorsReducer from './errors_reducer';
import reviewsReducer from './reviews_reducer';
import UIReducer from './ui_reducer';
import { modalReducer } from './modal_reducer';

const rootReducer = combineReducers({
  entities: entitiesReducer,
  errors: errorsReducer,
  session: sessionReducer,
  // modal: modalReducer,
  ui: UIReducer
  // reviews: reviewsReducer,
});

export default rootReducer;