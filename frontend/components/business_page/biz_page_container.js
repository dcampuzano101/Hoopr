import { connect } from 'react-redux';
import { requestBusiness } from '../../actions/biz_actions';
import { login, logout } from '../../actions/session_actions';
import BizPage from './biz_page';
import { openModal } from '../../actions/modal_actions';
import { deleteReview } from '../../actions/review_actions';
import { selectReviewsForBiz, selectPhotosForBiz } from '../../reducers/selectors';
import { search } from '../../actions/search_actions';


const msp = (state, ownProps) => {
  const extraClass = "biz-page";
  // console.log(ownProps.match.params.id);
  // const bizId = ownProps.match.params.id;
  const business = state.entities.businesses[ownProps.match.params.id] || {};
  const reviewObj = state.entities.reviews;
  const photoObj = state.entities.photos;
  let query = ownProps.match.params || {};
  // debugger;
    return ({
    query,
    business,
    // businessId: ownProps.match.params.id,
    extraClass,
    currentUser: state.entities.users[state.session.id],
    reviews: selectReviewsForBiz(business.reviewIds, reviewObj),
    photos: selectPhotosForBiz(business.photoIds, photoObj),
    users: state.entities.users
  });
};

const mdp = dispatch => {
  return({
    logout: () => dispatch(logout()),
    requestBusiness: businessId => dispatch(requestBusiness(businessId)),
    submitForm: user => dispatch(login(user)),
    openModal: (modal, props) => dispatch(openModal(modal, props)),
    requestBusinesses: () => dispatch(requestBusinesses()),
    deleteReview: (reviewId, businessId) => dispatch(deleteReview(reviewId, businessId)),
    search: query => dispatch(search(query))
  });
};

export default connect(msp, mdp)(BizPage);

// const BizPageContainer = (component) => {
//   return connect(msp, mdp)(component);
// };

// export default BizPageContainer;