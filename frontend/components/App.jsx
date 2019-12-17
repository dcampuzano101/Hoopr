
import React from 'react';
import { Route, Link } from 'react-router-dom'
// import { AuthRoute } from '../util/route_util';
import { Provider } from 'react-redux';
import SessionForm from './session_form/session_form';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import HeaderContainer from './header/header_container';
import BizPage from './business_page/biz_page_container';
import BizInfo from './business_page/biz_info_container';
import Modal from '../components/modal/modal';


import SignUpFormContainer from './signup_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';

const App = () => {
  //if currentUser render (session vs profile) in NAV component
  return(
    <div>
        <Route exact path="/" component={HeaderContainer} />
        <AuthRoute path="/login" component={LogInFormContainer} />
        <AuthRoute path="/signup" component={SignUpFormContainer} />
        <Route path="/businesses/:id" component={BizPage} />
        <Route path="/businesses/:id" component={Modal} />
        {/* <Route path="/businesses/:id" component={BizInfo} /> */}
    </div>
  )
}

export default App;

