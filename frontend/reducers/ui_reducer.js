import { combineReducers } from 'redux';
import modalReducer from './modal_reducer';

const UIReducer = combineReducers({
  modal: modalReducer
});

export default UIReducer;