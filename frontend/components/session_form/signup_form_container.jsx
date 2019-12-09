import { connect } from 'react-redux';
import SessionForm from './session_form';
import { Link } from 'react-router-dom'
import { signup } from '../../actions/session_actions';

const msp = state => {
  const { errors } = this.props;

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

export default connect(msp, mdp)(SessionForm);