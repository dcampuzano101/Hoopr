import React from 'react';
import Header from '../header/header';
import BizMapContainer from '../biz_map/biz_map_container';
import { Link } from 'react-router-dom'

class BizSearch extends React.Component {
  constructor(props){
    super(props);
    let { query } = "" || this.props.match.params;
    this.state = { query };
    this.updateSearch = this.updateSearch.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleDemoSubmit(user) {
    this.props.submitForm(user);
  }

  capitalizeWord(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }

  getPhotoUrl(photoObj, businessId) {
    let result = "";
      ;

    Object.values(photoObj).forEach( photo => {
      if (photo.business_id === businessId) {
        result = photo.photoUrl;
      }
    })
    return result;
  }

  getFirstReview(reviewObj, businessId) {
    let result = "";
      
    for (let i = 0; i < Object.values(reviewObj).length; i++) {
      if (Object.values(reviewObj)[i].business_id === businessId) {
        result = `"${Object.values(reviewObj)[i].body} ..." -${this.props.users[Object.values(reviewObj)[i].user_id].first_name} ${this.props.users[Object.values(reviewObj)[i].user_id].last_name[0]}`;
        return result;
      }
    }
  }

  componentDidMount() {
    this.props.requestBusinesses();
    (this.state.query.length > 0) ? this.props.search(this.state.query) : query = "";
  }

  componentDidUpdate(prevProps){
    if (this.props.match.params.id != prevProps.match.params.id) {
      this.props.requestBusinesses();
    }
  }

  updateSearch(e) {
    e.preventDefault();
    let query = e.currentTarget.value;
  }

  handleSearch(e) {
    let query = document.getElementById('search-field').value
    this.setState({ query });
    
    (query) ? this.props.search(query) : query = "";
    this.props.history.push('/search/' + query );
      
  }

  render() {
    const { businesses, users } = this.props;
      
    if (businesses.length > 0) {
        
      let businessLis = Object.values(businesses).map(biz => {
        const basketballs = [];
        for (let i = 1; i <= 5; i++) {
          let klass = 'ball-icon-header';
          if (biz.rating >= i) {
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

        return(
          <>
          <Link to={`/businesses/${biz.id}`}>
          <div className="biz-index-item-wrapper">
            <div className="biz-index-pic">
              <img className="canal" src={this.getPhotoUrl(this.props.photos, biz.id)} />
            </div>
            <div className="biz-index-info">
              <h1>{biz.name}</h1>
              <section className="static-rating-splash">{basketballs}</section>
              <h1 id="index-biz-borough">{this.capitalizeWord(biz.borough)}</h1>
              <h2 id="index-biz-neighborhood">{this.capitalizeWord(biz.neighborhood)}</h2>
              <h3 id="index-review">{this.getFirstReview(this.props.reviews, biz.id)}</h3>
            </div>

          </div>
          </Link>
          </>
        )});
      return(
        <div>
          <Header extraClass={this.props.extraClass} submitForm={this.props.submitForm} currentUser={this.props.currentUser}
            logout={this.props.logout} />
          <div>
            <BizMapContainer />
          </div>
          <div className="biz-index-container">
          
            {businessLis}
          </div>
        </div>
      )
    } else {
      return (null)
    }
  }
  


}

export default BizSearch;