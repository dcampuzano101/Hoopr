import React from 'react';
import { Route, Link } from 'react-router-dom'
// import { AuthRoute } from '../util/route_util';
import { Provider } from 'react-redux';
import SessionForm from './session_form/session_form';


import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';

const App = () => {
  return(
    <div>
      <header>
        <h1>Welcome to Hoopr!</h1>
        {/* <SessionForm /> */}
        <Route exact path="/login" component={LogInFormContainer} />
        <Route exact path="/signup" component={SignUpFormContainer} />
      </header>


    </div>
  )
}

export default App;