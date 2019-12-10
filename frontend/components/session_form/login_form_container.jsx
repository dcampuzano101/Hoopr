import { connect } from 'react-redux';
import SessionForm from './session_form';
import { Link } from 'react-router-dom';
import { login } from '../../actions/session_actions';
import React from 'react';

const msp = (state) => {
  
  return({
    // errors: errors.session,
    formType: 'login',
    navLink: <Link to="/signup">sign up instead</Link>
  });
};

const mdp = dispatch => {
  return({
    submitForm: user => dispatch(login(user))
  });
};

export default connect(msp, mdp)(SessionForm);