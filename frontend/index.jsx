import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import { login, signup, logout } from './actions/session_actions';
import { requestBusiness, requestBusinesses, createBusiness } from './actions/biz_actions.js';
import { requestReview, createReview, updateReview } from './actions/review_actions';




document.addEventListener("DOMContentLoaded", () => {
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
  window.requestReview = requestReview;

  
  ReactDOM.render(<Root store={store} />, root);

});

