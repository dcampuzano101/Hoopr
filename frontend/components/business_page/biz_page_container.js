import { connect } from 'react-redux';
import { requestBusiness } from '../../actions/biz_actions';
import BizPage from './biz_page';

const msp = (state, ownProps) => {
  const extraClass = "biz-page";
    return ({
    business: state.entities.businesses[ownProps.match.params.businessId],
    extraClass
  });
};

const mdp = dispatch => {
  return({
    requestBusiness: businessId => dispatch(requestBusiness(businessId)),
    submitForm: user => dispatch(login(user))
  });
};

export default connect(msp, mdp)(BizPage);