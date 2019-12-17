import { connect } from 'react-redux';
import React from 'react';
import { createReview } from '../../actions/review_actions';
import { openModal, closeModal } from '../../actions/modal_actions';
import ReviewForm from './review_form';
import { requestBusiness } from '../../actions/biz_actions';

const mapStateToProps = ({ errors }) => {
  return {
    errors: errors.session,
    formType: 'createReview',
    currentUser: state.entities.users[state.session.id]
  };
};

const mapDispatchToProps = dispatch => {
  return {
    requestBusiness: (businessId) => dispatch(requestBusiness(businessId)),
    processForm: (review) => dispatch(createReview(review)),
    otherForm: (
      <button onClick={() => dispatch(openModal('createReview'))}>
        Write Review
      </button>
    ),
    closeModal: () => dispatch(closeModal())
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ReviewForm));