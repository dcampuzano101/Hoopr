import { CLOSE_MODAL, OPEN_MODAL } from '../actions/modal_actions';

let initialState = {name: '', props: {}};
const modalReducer = (state = initialState, action) => {
  Object.freeze(state);

  switch (action.type) {
    case CLOSE_MODAL:
      return initialState;
      
    case OPEN_MODAL:
      console.log(action);
      return { name: action.modal, props: action.props };
  
    default:
      return state;
  }
};

export default modalReducer;



