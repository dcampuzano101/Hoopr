import { connect } from 'react-redux';
import { updateReview } from '../../actions/review_actions';
import { requestBusiness } from '../../actions/biz_actions';
import UpdateForm from './update_form';
import React from 'react';
import { openModal, closeModal } from '../../actions/modal_actions';
import { withRouter } from 'react-router-dom';
 
const msp = (state, ownProps) => {
  let review = state.entities.reviews[ownProps.id];
  // debugger;
  return({
    review,
    currentUser: state.entities.users[state.session.id],
    currentBiz: state.entities.businesses[review.business_id]
  });
};

const mdp = dispatch => {
  return({
    requestBusiness: businessId => dispatch(requestBusiness(businessId)),
    processForm: (review) => dispatch(updateReview(review)),
    otherForm: (
      <button onClick={() => dispatch(openModal('updateReview'))}>
        Update Review
      </button>
    ),
    closeModal: () => dispatch(closeModal())
  });
};


export default withRouter(connect(msp, mdp)(UpdateForm));