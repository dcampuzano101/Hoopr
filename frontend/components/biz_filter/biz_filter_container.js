import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { requestBusinesses } from '../../actions/biz_actions';
import { login, logout } from '../../actions/session_actions';
import BizFilter from './biz_filter_results';
import { selectBusinessesForSearch } from '../../reducers/selectors';
import { filterByBorough, search } from '../../actions/search_actions';

const msp = (state, ownProps) => {
  debugger;
  const extraClass = "biz-index";
  const businesses = state.entities.businesses;
  const businessObj = state.entities.search.businessIds;
  return ({
    businesses: selectBusinessesForSearch(businessObj, businesses),
    extraClass,
    currentUser: state.entities.users[state.session.id],
    users: state.entities.users, 
    photos: state.entities.photos,
    reviews: state.entities.reviews
  });
};

const mdp = dispatch => {
  return ({
    logout: () => dispatch(logout()),
    submitForm: user => dispatch(login(user)),
    requestBusinesses: () => dispatch(requestBusinesses()),
    search: query => dispatch(search(query)),
    filterByBorough: borough => dispatch(filterByBorough(borough))
  });
};

export default withRouter(connect(msp, mdp)(BizFilter));