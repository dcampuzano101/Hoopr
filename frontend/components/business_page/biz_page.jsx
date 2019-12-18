import React from 'react';
import Header from '../header/header';
import BizInfo from './biz_info';
import { Link } from 'react-router-dom';
import { login, logoutCurrentUser } from '../../actions/session_actions';
import { openModal } from '../../actions/modal_actions';
import BizMap from '../../components/biz_map/biz_map';
// import Review from './review_list_item_container';


class BizPage extends React.Component {
  constructor(props){
    debugger;
    super(props);
    console.log(props);
    // this.handleDemoSubmit = this.handleDemoSubmit.bind(this);
    // const biz = props.requestBusiness(props)
    const { submitForm } = this.props;
    console.log(props);
  }

  handleDemoSubmit(user) {
    // debugger;
    // e.preventDefault();
    // const user = { email: "chefcurry@warriors.com", password: "splashbro" };
    this.props.submitForm(user);
  }

  componentDidUpdate(prevProps){
    debugger;
    if (this.props.match.params.url != prevProps.match.params.url) {
      this.props.requestBusiness(this.props.match.params.id);
    }
  }

  componentDidMount(){
    debugger;
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
      let reviews;

      if (business.reviews.length) {
        reviews = business.reviews.map(review =>
          <div>
            {/* <li>{review.user.first_name} {review.user.last_name}</li> */}
            <li>{review.rating}</li>
            <li>{review.body}</li>
          </div>
        )
      }
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
              <div className="biz-map">
                {/* <BizMap /> */}
              </div>
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
              {reviews}
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