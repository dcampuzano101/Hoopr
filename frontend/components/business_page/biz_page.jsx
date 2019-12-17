import React from 'react';
import Header from '../header/header';
import BizInfo from './biz_info';
import { Link } from 'react-router-dom';
import { login } from '../../actions/session_actions';
import { openModal } from '../../actions/modal_actions';


class BizPage extends React.Component {
  constructor(props){
    debugger;
    super(props);
    console.log(props);
    // this.handleDemoSubmit = this.handleDemoSubmit.bind(this);
    // const biz = props.requestBusiness(props)
    const { submitForm } = this.props;
  }

  handleDemoSubmit(user) {
    // debugger;
    // e.preventDefault();
    // const user = { email: "chefcurry@warriors.com", password: "splashbro" };
    this.props.submitForm(user);
  }



  componentDidMount(){
    this.props.requestBusiness(this.props.match.params.id);
  }

  grabBizInfo(){
    const { businessId, requestBusiness } = this.props;
  }

  render(){
    const { business, openModal, requestBusiness } = this.props;

    const sessionLinks = () => (
      <nav className="review-form">
        <button onClick={() => openModal('createReview')}>&#9733; Write a Review</button>
      </nav>
    );

    if (this.props.business) {
      return (
        <div>
          <Header extraClass={this.props.extraClass} submitForm={this.props.submitForm} currentUser={this.props.currentUser}
            logout={this.props.logout}/>
          <div className="gallery-container">
            <img className="hoop" src={window.hoop} />
            <img className="ai" src={window.ai} />
            <img className="venice" src={window.venice} />
            <img className="shoot" src={window.shoot} />
          </div>
          <div className="show-container">
            <div className="biz-info-container">
              <h1>{business.name}</h1>
              <h3>Rating: {business.rating}
               16 reviews</h3>
              <h3><Link to="#">{business.court_type}</Link></h3>
              <section className="info-buttons">
                <button className="write-review-modal"> &#9733; Write a Review</button>
                <button className="add-photo"> &#128247; Add Photo</button>
              </section>
            </div>
            <div className="sticky-info">
              <div className="sticky-links">
                <img className="phone" src={window.phone} />
                <span>{business.telephone}</span>
                <img className="web" src={window.web} />
                <span><Link to={business.website}>{business.name}</Link></span>
                {/* <hr id="sticky-hr" /> */}
              </div>
             
              
            </div>
            <hr/>
            <div className="location-info">
              <h3>Location & Hours</h3>
              <div className="map-container">
                <img className="map" src={window.map} />
                <div className="hours">
                  <p>Mon</p> 
                  <span>{business.start_time} - {business.end_time}</span>
                  <p>Tues</p> 
                  <span>{business.start_time} - {business.end_time}</span>
                  <p>Wed</p>
                  <span>{business.start_time} - {business.end_time}</span>
                  <p>Thurs</p> 
                  <span>{business.start_time} - {business.end_time}</span>
                  <p>Fri</p>
                  <span>{business.start_time} - {business.end_time}</span>
                  <p>Sat</p> 
                  <span>{business.start_time} - {business.end_time}</span>
                  <p>Sun</p> 
                  <span>{business.start_time} - {business.end_time}</span>
                </div>
              </div>
            </div>
            <hr/>
            <div className="create-review-photo">
              <div className="ball-rating">
                <img className="ball-icon" src={window.ballicon} />
                <img className="ball-icon" src={window.ballicon} />
                <img className="ball-icon" src={window.ballicon} />
                <img className="ball-icon" src={window.ballicon} />
                <img className="ball-icon" src={window.ballicon} />
              </div>
              {sessionLinks()}
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