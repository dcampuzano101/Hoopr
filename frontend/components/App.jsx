import React from 'react';
import { Route, Link } from 'react-router-dom'
import { Provider } from 'react-redux';
import SessionForm from './session_form/session_form';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import HeaderContainer from './header/header_container';
import BizPage from './business_page/biz_page_container';
import BizIndexItemContainer from './header/business_index_items_container';
import Footer from './header/footer';
import Modal from '../components/modal/modal';
import BizIndex from '../components/biz_index/biz_index_container';
import BizFilter from '../components/biz_filter/biz_filter_container';
import BizSearch from '../components/biz_search/biz_search_results_container';
import UserPage from './user_page/user_page_container';


import SignUpFormContainer from './signup_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';

const App = () => {
  //if currentUser render (session vs profile) in NAV component
  return(
    <div>
        <Route exact path="/" component={HeaderContainer} />
        <AuthRoute path="/login" component={LogInFormContainer} />
        <AuthRoute path="/signup" component={SignUpFormContainer} />
        <Route exact path="/businesses/" component={BizIndex} />
        <Route path="/businesses/:id" component={BizPage} />
        <Route path="/businesses/:id" component={Modal} />
        <Route path="/users/:id" component={UserPage} />
        <Route path="/users/:id" component={Modal} />
        <Route exact path="/" component={BizIndexItemContainer} />
        <Route exact path="/" component={Footer} />
        <Route exact path="/businesses/:id" component={Footer} />
        <Route exact path="/search/:query" component={BizSearch} />
        <Route exact path="/filter/:borough" component={BizFilter} />
        {/* <Route path="/businesses/:id" component={BizMap} /> */}
        {/* <Route path="/businesses/:id" component={BizInfo} /> */}

    </div>
  )
}

export default App;

