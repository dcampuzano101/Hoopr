import { connect } from 'react-redux';
import SignupForm from './signup_form';
import { Link } from 'react-router-dom';
import { signup } from '../../actions/session_actions';
import React from 'react';

const msp = state => {
  const { errors } = state;
  return ({
    errors: errors.session,
    formType: 'signup',
    navLink: <Link to="/signup">log in instead</Link>
  });
};

const mdp = dispatch => {
  return ({
    submitForm: user => dispatch(signup(user))
  });
};

export default connect(msp, mdp)(SignupForm);