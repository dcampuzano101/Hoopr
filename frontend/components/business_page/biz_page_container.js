import { connect } from 'react-redux';
import { requestBusiness } from '../../actions/biz_actions';
import { login, logout } from '../../actions/session_actions';
import BizPage from './biz_page';
import { openModal } from '../../actions/modal_actions'

const msp = (state, ownProps) => {
  const extraClass = "biz-page";
  // console.log(ownProps.match.params.id);
  // const bizId = ownProps.match.params.id;

    return ({
    business: state.entities.businesses[ownProps.match.params.id],
    businessId: ownProps.match.params.id,
    extraClass,
    currentUser: state.entities.users[state.session.id]
  });
};

const mdp = dispatch => {
  return({
    logout: () => dispatch(logout()),
    requestBusiness: businessId => dispatch(requestBusiness(businessId)),
    submitForm: user => dispatch(login(user)),
    openModal: modal => dispatch(openModal(modal)),
  });
};

export default connect(msp, mdp)(BizPage);