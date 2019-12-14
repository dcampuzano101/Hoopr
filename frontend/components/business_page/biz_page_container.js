import { connect } from 'react-redux';
import { requestBusiness } from '../../actions/biz_actions';
import BizPage from './biz_page';

const msp = (state, ownProps) => {
  const extraClass = "biz-page";
  // console.log(ownProps.match.params.id);
  // const bizId = ownProps.match.params.id;

    return ({
    business: state.entities.businesses[ownProps.match.params.id],
    businessId: ownProps.match.params.id,
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