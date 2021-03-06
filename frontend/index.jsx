import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import { login, signup, logout } from './actions/session_actions';
import { requestBusiness, requestBusinesses, createBusiness } from './actions/biz_actions.js';
import { requestReview, createReview, updateReview, deleteReview } from './actions/review_actions';
import { requestPhoto, createPhoto, deletePhoto } from './actions/photo_actions';

let count = 0;


document.addEventListener("DOMContentLoaded", () => {
  count += 1;
  console.log(count);
  const root = document.getElementById("root");
  let store;
    
  if (window.currentUser) {
    const { currentUser } = window;
    const { id } = currentUser;
    const preloadedState = {
      entities: {
        users: {
          [id]: currentUser
        }
      },
      session: { id }
    };
    store = configureStore(preloadedState);

    // Clean up after ourselves so we don't accidentally use the
    // global currentUser instead of the one in the store
    delete window.currentUser;

  } else {
    store = configureStore();
  }
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.login = login;
  window.signup = signup;
  window.logout = logout;
  window.requestBusiness = requestBusiness;
  window.requestBusinesses = requestBusinesses;
  window.createBusiness = createBusiness;
  window.createReview = createReview;
  window.updateReview = updateReview;
  window.deleteReview = deleteReview;
  window.requestReview = requestReview;
  window.createPhoto = createPhoto;
  window.deletePhoto = deletePhoto;

  
  ReactDOM.render(<Root store={store} />, root);

});

