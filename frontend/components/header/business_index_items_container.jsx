import { connect } from 'react-redux';
import { requestBusinesses } from '../../actions/biz_actions';
import BizIndexItem from './business_index_item';

const msp = state => {
  debugger;
  console.log(state);

  return ({
    businesses: state.entities.businesses
  });
};


const mdp = dispatch => {

  return ({
    requestBusinesses: () => dispatch(requestBusinesses())
  });
};

export default connect(msp, mdp)(BizIndexItem);