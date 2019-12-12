import  { connect } from 'react-redux';
import Header from './header';
import React from 'react';
import { logout, login } from '../../actions/session_actions';

const msp = state => {
  
  return({
    currentUser: state.entities.users[state.session.id]
  });
};

const mdp = dispatch => {
  
  return ({
    logout: () => dispatch(logout()),
    receiveCurrentUser: currentUser => (currentUser => dispatch(currentUser)),
    submitForm: user => dispatch(login(user))
    
  });
};

export default connect(msp, mdp)(Header);