import React from 'react';
import Header from '../header/header';
import BizInfo from './biz_info';
import { requestBusinesses } from '../../actions/biz_actions';

class BizPage extends React.Component {
  constructor(props){
    debugger;
    super(props);
    console.log(props);
    this.handleDemoSubmit = this.handleDemoSubmit.bind(this);
  }

  handleDemoSubmit(e) {
    e.preventDefault();
    const user = { email: "chefcurry@warriors.com", password: "splashbro" }
    this.props.submitForm(user);
  }

  render(){
    return (
      <>
        <Header extraClass={this.props.extraClass} />
        {/* <BizInfo id={this.ownProps.match.params.businessId} /> */}
      </>
    );
  }
}

export default BizPage;