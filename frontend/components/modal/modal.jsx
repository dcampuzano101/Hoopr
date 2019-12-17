import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
// import LoginFormContainer from '../session_form/login_form_container';
import ReviewFormContainer from '../review/review_form_container';

function Modal({ modal, closeModal }) {
  debugger;
  if (!modal) {
    return null;
  }
  let component;
  switch (modal) {
    case 'createReview':
      component = <ReviewFormContainer />;
      break;
    default:
      return null;
  }
  return (
    <div className="modal-background" onClick={closeModal}>
      <div className="modal-child" onClick={e => e.stopPropagation()}>
        {component}
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    modal: state.ui.modal
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(closeModal())
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Modal));