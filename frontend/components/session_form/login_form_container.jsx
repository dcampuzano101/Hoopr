import { connect } from 'react-redux';
import SessionForm from './session_form';
import { Link } from 'react-router-dom';
import { login, logout } from '../../actions/session_actions';
import React from 'react';

const msp = ({ errors }) => {
  return({
    errors: Object.values(errors.session),
    formType: 'login',
    navLink: <Link to="/signup">sign up instead</Link>
  });
};

const mdp = dispatch => {
  return({
    submitForm: user => dispatch(login(user)),
    logout: () => dispatch(logout())
  });
};

export default connect(msp, mdp)(SessionForm);