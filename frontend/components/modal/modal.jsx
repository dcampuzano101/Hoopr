import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
// import LoginFormContainer from '../session_form/login_form_container';
import ReviewFormContainer from '../review/review_form_container';
import UpdateForm from '../update_form/update_form_container';

function Modal({ name, closeModal, props }) {
  console.log(name, props);
  if (!name) {
    return null;
  }
  let component;
  switch (name) {
    case 'createReview':
      component = <ReviewFormContainer />;
      break;

    case 'updateReview':
      
      component = <UpdateForm {...props} />;
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
    name: state.ui.modal.name,
    props: state.ui.modal.props
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(closeModal())
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Modal));