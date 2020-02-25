import React from 'react';
import Header from '../header/header';
import { Link } from 'react-router-dom';
import BizMapContainer from '../biz_map/biz_map_container';

class BizIndex extends React.Component {
  constructor(props){
    console.log(props);
    super(props);
    // this.moveTo = this.moveTo.bind(this);
    this.child = React.createRef();
    debugger;
  }

  handleDemoSubmit(user) {
    this.props.submitForm(user);
  }

  getPhotoUrl(photoObj, businessId) {
    let result = "";
    debugger;

    Object.values(photoObj).forEach( photo => {
      if (photo.business_id === businessId) {
        result = photo.photoUrl;
      }
    })
    return result;
  }

  getFirstReview(reviewObj, businessId) {
    let result = "";
    debugger;

    // Object.values(reviewObj).forEach( review => {
    // })

    for (let i = 0; i < Object.values(reviewObj).length; i++) {
      if (Object.values(reviewObj)[i].business_id === businessId) {
        result = `"${Object.values(reviewObj)[i].body} ..." -${this.props.users[Object.values(reviewObj)[i].user_id].first_name} ${this.props.users[Object.values(reviewObj)[i].user_id].last_name[0]}`;
        return result;
      }
    }
  }

  capitalizeWord(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }

  // componentDidUpdate(prevProps) {
  //   console.log(prevProps);
  //   if (this.props.match.params.url !== prevProps.match.params.url) {
  //     this.props.requestBusinesses();
  //   }
  // }

  componentDidMount() {
    this.props.requestBusinesses();
  }
  // moveTo(lat, lng) {
  //   let latLng = new google.maps.LatLng(lat, lng); 
  //   this.map.panTo(latLng); 
  // }

  // onMouseOver(lat, lng){
  //   debugger;
  //   this.child.current.moveTo(lat, lng);
  // };

  render() {
    const { businesses, users } = this.props;
    if (businesses) {
      // debugger;
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
          <Link to={`businesses/${biz.id}`}>
          <div className="biz-index-item-wrapper">
            <div className="biz-index-pic">
              <img className="canal" src={this.getPhotoUrl(this.props.photos, biz.id)} />
            </div>
            <div className="biz-index-info">
              <h1 id="index-biz-name">{biz.name}</h1>
              <section className="static-rating-splash">{basketballs}</section>
              <h1 id="index-biz-borough">{this.capitalizeWord(biz.borough)}</h1>
              <h2 id="index-biz-neighborhood">{biz.neighborhood}</h2>
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
            <BizMapContainer ref={this.child}/>
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

export default BizIndex;