  import  { connect } from 'react-redux';
import Header from './header';
import React from 'react';
import { logout, login } from '../../actions/session_actions';
import { requestBusinesses } from '../../actions/biz_actions';
const msp = state => {
  
  return({
    currentUser: state.entities.users[state.session.id],
    extraClass: "someClass",
    businesses: state.entities.businesses
  });
};


const mdp = dispatch => {
  
  return ({
    logout: () => dispatch(logout()),
    receiveCurrentUser: currentUser => (currentUser => dispatch(currentUser)),
    submitForm: user => dispatch(login(user)),
    requestBusinesses: () => dispatch(requestBusinesses())
  });
};

export default connect(msp, mdp)(Header);