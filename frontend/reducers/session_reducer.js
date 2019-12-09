import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from '../actions/session_actions';


const _nullUser = Object.freeze({
  id: null
})

const sessionReducer = (state = _nullUser, action) => {
  Object.freeze(state);
};

export default sessionReducer;