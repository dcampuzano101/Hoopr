import  { connect } from 'react-redux';
import Header from './header';
import React from 'react';
import { logout } from '../../actions/session_actions';

const msp = state => {
  debugger;
  return({
    currentUser: state.entities.users[state.session.id]
  });
};

const mdp = dispatch => {
  debugger;
  return ({
    logout: () => dispatch(logout()),
    receiveCurrentUser: currentUser => (currentUser => dispatch(currentUser))
  });
};

export default connect(msp, mdp)(Header);