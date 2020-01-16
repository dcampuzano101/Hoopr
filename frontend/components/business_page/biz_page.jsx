import React from 'react';
import Header from '../header/header';
import { Link } from 'react-router-dom';
import { login, logoutCurrentUser } from '../../actions/session_actions';
// import { openModal } from '../../actions/modal_actions';
// import BizMap from '../../components/biz_map/biz_map';
import BizMapContainer from '../biz_map/biz_map_container';
import BizPageContainer from './biz_page_container';
// import Review from './review_list_item_container';
import UpdateForm from '../update_form/update_form_container';


class BizPage extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      rating: null,
      temp_rating: null
    };
  }

  handleDemoSubmit(user) {
    this.props.submitForm(user);
  }

  componentDidUpdate(prevProps){
    if (this.props.match.params.id != prevProps.match.params.id) {
      this.props.requestBusiness(this.props.match.params.id);
    }
  }

  componentDidMount(){
    this.props.requestBusiness(this.props.match.params.id);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  rate(numRating) {
    return e => this.setState({
      rating: numRating
    });
  }

  ball_over(rating) {
    return e => this.setState({
      temp_rating: rating
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const review = Object.assign({}, this.state);
    this.props.processForm(review).then(this.props.closeModal);
  }

  render(){
    const basketballStatic = [];

    for (let i = 1; i <= 5; i++) {
      let klass = 'ball-icon';
      if (this.state.temp_rating >= i && this.state.temp_rating != null) {
        klass += ' is-selected';
      }
      const icon =
        <img
          className={klass}
          src={window.ballicon}
          onClick={this.rate(i)}
          key={i}
          onMouseOver={this.ball_over(i)}
        />;
      basketballStatic.push(icon);
    }

    const { business, openModal, reviews, users, deleteReview } = this.props;
    const sessionLinks = () => (
      <nav className="review-form">
        <button className="rvw-btn biz-info" onClick={() => openModal('createReview')}>&#9733; Write a Review</button>
      </nav>
    );

    const updateLinks = (review) => (

      <nav className="review-form">
        <button className="rvw-btn biz-info" onClick={() => openModal('updateReview', {id: review.id})}>&#9733; Edit Review</button>
        <button className="rvw-btn biz-info" onClick={() => deleteReview(review.id, business.id)}>&#9733; Delete Review</button>
      </nav>
    );
    if (business.id) {
      let reviewLis;
      if (reviews.length) {
        reviewLis = reviews.map(review =>{
          const basketballs = [];
          for (let i = 1; i <= 5; i++) {
            let klass = 'ball-icon-header';
            if (review.rating >= i) {
              klass += ' is-selected';
            }
            const icon =
              <img
                key={i}
                className={klass}
                src={window.ballicon}
              />;
            basketballs.push(icon);
          }

          return (
          <>
            <section className="profile-info">
              <h3>{users[review.user_id].first_name} {users[review.user_id].last_name[0]}.</h3>
              <img className="yelp-profile" src={window.pf} />
            </section>
            <div className="rating-review">
              <section className="static-rating">{basketballs}</section>
              <h3 key={review.id}>{review.body}</h3>
            </div>
            {/* <UpdateForm review={review}/> */}
              {updateLinks(review)}
            <div className="hr-row"></div>
          </>
          )}
        )
      }
      return (
        <div>
          {/* <Link id=""to="/"><img id="logo-biz-page" src={window.logo} /></Link> */}
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
              <h3>Rating: {business.rating} - 16 reviews</h3>
              <h3><Link to="#">{business.court_type}</Link></h3>
              <section className="info-buttons">
                <nav className="review-form">
                  <button className="rvw-btn biz-info" onClick={() => openModal('createReview')}>&#9733; Write a Review</button>
                </nav>
                {/* <button className="add-photo"> &#128247; Add Photo</button> */}
              </section>
            </div>
            <div className="sticky-info">
              <div className="sticky-links">
                <img className="phone" src={window.home} />
                <span>{business.neighborhood}</span>
                <div className="hr-row-sticky"></div>
                <img className="web" src={window.web} />
                <span><a href={business.website}>{business.name}</a></span>
                <div className="hr-row-sticky"></div>
                <img className="whistle" src={window.whistle} />
                <span>Call your own Fouls</span>
              </div>
             
              <a href=""></a>
            </div>
            <div className="hr-row-top"></div>
            <div className="location-info">
              <h3>Location & Hours</h3>
              {/* <div className="biz-map"> */}
                {/* <BizMap /> */}
              {/* </div> */}
              <div className="map-container">
                {/* <img className="map" src={window.map} /> */}
                <BizMapContainer />
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
            <div className="hr-row-top"></div>
            {/* <div className="review-container">
              <div className="review-items">
                <div className="profile-section">
                </div>
                <div className="review-item">
                  {reviewLis}
                </div>
              </div>
            </div> */}

            <div className="create-review-photo">
              <div className="review-container-info">
                <div className="ball-rating">
                  {basketballStatic}
                  {/* <img className="ball-icon" src={window.ballicon} />
                  <img className="ball-icon" src={window.ballicon} />
                  <img className="ball-icon" src={window.ballicon} />
                  <img className="ball-icon" src={window.ballicon} />
                  <img className="ball-icon" src={window.ballicon} /> */}
                </div>
                {sessionLinks()}
              </div>
            </div>
            <div className="review-container">
              <div className="review-items">
                <div className="profile-section">
                </div>
                <div className="review-item">
                  {reviewLis}
                </div>
              </div>
            </div>
          </div>


        </div>
      );
    } else {
      return (null);
    }
  }
}

export default BizPage;