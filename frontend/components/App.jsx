import React from 'react';
import { Route, Link } from 'react-router-dom'
// import { AuthRoute } from '../util/route_util';
import { Provider } from 'react-redux';
import SessionForm from './session_form/session_form';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import HeaderContainer from './header/header_container';


import SignUpFormContainer from './signup_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';

const App = () => {
  //if currentUser render (session vs profile) in NAV component
  return(
    <div>
      <header>
        <Route exact path="/" component={HeaderContainer} />
        <AuthRoute path="/login" component={LogInFormContainer} />
        <AuthRoute path="/signup" component={SignUpFormContainer} />
      </header>
    </div>
  )
}

export default App;

