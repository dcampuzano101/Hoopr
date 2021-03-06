import { connect } from 'react-redux';
import  { requestUser, requestUsers, login, logout } from '../../actions/session_actions';
import UserPage from './user_page';
import { selectReviewsForUser } from '../../reducers/selectors';


const msp = (state, ownProps) => {
    const extraClass = 'user-page';
    const user = state.entities.users[ownProps.match.params.id] || {};
    const reviewObj = state.entities.reviews;
    let query = ownProps.match.params || {};
    let profilePhotoUrl = "";
      
    return ({
        query,
        user,
        extraClass,
        currentUser: state.entities.users[state.session.id],
        reviews: selectReviewsForUser(user.reviewIds, reviewObj),
        users: state.entities.users,
        businesses: state.entities.businesses
      });
};

const mdp = dispatch => {
    return({
      logout: () => dispatch(logout()),
      submitForm: user => dispatch(login(user)),
      openModal: (modal, props) => dispatch(openModal(modal, props)),
      requestUser: userId => dispatch(requestUser(userId)),
      requestUsers: () => dispatch(requestUsers()),    
      deleteReview: (reviewId, businessId) => dispatch(deleteReview(reviewId, businessId)),
      search: query => dispatch(search(query))
    });
  };
  
  export default connect(msp, mdp)(UserPage);


