import React from 'react';
import Header from '../header/header';
import BizInfo from './biz_info';
import { Link } from 'react-router-dom';
import { login } from '../../actions/session_actions';


class BizPage extends React.Component {
  constructor(props){
    debugger;
    super(props);
    console.log(props);
    this.handleDemoSubmit = this.handleDemoSubmit.bind(this);
    // const biz = props.requestBusiness(props)
    const { submitForm } = this.props;
  }

  handleDemoSubmit(e) {
    e.preventDefault();
    const user = { email: "chefcurry@warriors.com", password: "splashbro" };
    login(user);
  }

  componentDidMount(){
    this.props.requestBusiness(this.props.match.params.id);
  }

  grabBizInfo(){
    const { businessId, requestBusiness } = this.props;



  }

  render(){
    const { business, requestBusiness } = this.props;

    if (this.props.business) {
      return (
        <div>
          <Header extraClass={this.props.extraClass} />
          <div className="gallery-container">
            <img className="hoop" src={window.hoop} />
            <img className="ai" src={window.ai} />
            <img className="venice" src={window.venice} />
            <img className="shoot" src={window.shoot} />
          </div>
          <div className="show-container">
            <div className="biz-info-container">
              BIZNAME: RUCKER
              EMAIL: HELLO@LOL.COM
              PHONE: 917-917-1987
            </div>
            <div className="sticky-info">
              What goes here??
            </div>
            <div className="location-info">
              LOCATION: MANHATTAN
              HOURS: ALLDAY24/7
              ADDRESS: WEST4th
            </div>
            <div className="create-review-photo">
              <button>CREATE REVIEW</button>
              <button>ADD PHOTO</button>
            </div>
            <div className="review-items">
              <p>REVIEWS GO HERE</p>
            </div>
          </div>

          <footer className="footer-container">
            <Link to="#"><img className="fav-icon" src={window.cloud} /></Link>
            <Link to="#"><img className="fav-icon" src={window.whistle} /></Link>
          </footer>
        </div>
      );
    } else {
      return (null);
    }
  }
}

export default BizPage;