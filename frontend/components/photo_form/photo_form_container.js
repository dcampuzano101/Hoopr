import { connect } from 'react-redux';
import React from 'react';
import { createPhoto } from '../../actions/photo_actions';
import { openModal, closeModal } from '../../actions/modal_actions';
import PhotoForm from './photo_form';
import { requestBusiness } from '../../actions/biz_actions';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
  debugger;
  return {
    // errors: errors.session,
    formType: 'createPhoto',
    currentUser: state.entities.users[state.session.id],
    currentBiz: state.entities.businesses[ownProps.match.params.id]
  };
};

const mapDispatchToProps = dispatch => {
  
  return {
    requestBusiness: (businessId) => dispatch(requestBusiness(businessId)),
    processForm: (photo, businessId) => dispatch(createPhoto(photo, businessId)),
    otherForm: (
      <button onClick={() => dispatch(openModal('createPhoto'))}>
          Upload Photo
      </button>
    ),
    closeModal: () => dispatch(closeModal())
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PhotoForm));