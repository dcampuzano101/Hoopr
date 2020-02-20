import React from 'react';
import Header from '../header/header';
import { Link, Redirect } from 'react-router-dom';
// import { login, logoutCurrentUser } from '../../actions/session_actions';
// import { openModal } from '../../actions/modal_actions';
// import BizMap from '../../components/biz_map/biz_map';
// import BizMapContainer from '../biz_map/biz_map_container';
// import BizPageContainer from './biz_page_container';
// import Review from './review_list_item_container';
// import UpdateForm from '../update_form/update_form_container';


class UserPage extends React.Component {
  constructor(props){
    super(props);
    console.log(props);
    debugger;
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
      this.props.requestUser(this.props.match.params.id);
    }
  }

  componentDidMount(){
    this.props.requestUser(this.props.match.params.id);
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

    const { businesses, user, openModal, reviews, users, deleteReview, currentUser, profilePhotoUrl } = this.props;


    debugger;
    if (reviews) {
      let reviewLis;
      if (reviews.length) {
        reviewLis = reviews.map(review =>{
          let updateLinks;
          debugger;
          if(this.props.currentUser) {
            if (this.props.currentUser.id === review.user_id) {
              updateLinks = (review) => (
              <nav className="review-form">
                <button className="rvw-btn biz-info" onClick={() => openModal('updateReview', {id: review.id}, {tempRating: this.state.temp_rating})}>&#9733; Edit Review</button>
                <button className="rvw-btn biz-info" onClick={() => deleteReview(review.id, business.id)}>&#9733; Delete Review</button>
              </nav>
              )
           } else {
              updateLinks = () => (
              <div></div>
              )
          }
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
              <h2><Link to={`/businesses/${review.business_id}`}>{businesses[review.business_id].name}</Link></h2>
              <h3>{users[review.user_id].first_name} {users[review.user_id].last_name[0]}.</h3>
              <img className="yelp-profile" src={users[review.user_id].profilePhotoUrl} />
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
        })
      }
      debugger;
      return (
        <div>
          {/* <Link id=""to="/"><img id="logo-biz-page" src={window.logo} /></Link> */}
          <Header extraClass={this.props.extraClass} submitForm={this.props.submitForm} currentUser={this.props.currentUser}
            logout={this.props.logout}/>
          
          {/* <div className="gallery-container">
            <img className="hoop" src={window.hoop} />
            <img className="ai" src={window.ai} />
            <img className="venice" src={window.venice} />
            <img className="shoot" src={window.shoot} />
          </div> */}
          <div className="show-container">
            <section>
              <div className="user-profile-container">
                <div className="user-picture">
                  <img className="yelp-profile" src={user.profilePhotoUrl} />
                  <h3>{user.first_name}</h3>
                  <h3>{user.last_name}</h3>
                </div>
              </div>
            </section>
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

export default UserPage;