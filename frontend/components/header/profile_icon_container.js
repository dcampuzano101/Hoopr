import { connect } from 'react-redux';
import Header from './header';

const msp = state => {
  return ({
    currentUser: state.entities.users[state.session.id]
  });
};


export default connect(msp)(Header);