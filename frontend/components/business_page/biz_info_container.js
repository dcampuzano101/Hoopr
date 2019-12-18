import { connect } from 'react-redux';
import { requestBusiness } from '../../actions/biz_actions';
import BizInfo from './biz_info';

const msp = (state, ownProps) => {
  const extraClass = "biz-page";
  
  return({

  });
};

const mdp = dispatch => {
  
  return({

  });
};


export default connect(msp, mdp)(BizInfo);