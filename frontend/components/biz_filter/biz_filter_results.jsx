import React from 'react';
import Header from '../header/header';
import BizMapContainer from '../biz_map/biz_map_container';

class BizFilter extends React.Component {
  constructor(props){
    console.log(props);
    super(props);
    let { borough } = "" || this.props.match.params;
    
    

    console.log(borough)
    this.state = { borough };
    this.updateSearch = this.updateSearch.bind(this);
    this.handleSearch = this.handleSearch.bind(this);

    // debugger;
  }

  handleDemoSubmit(user) {
    this.props.submitForm(user);
  }

  componentDidMount() {
    this.props.requestBusinesses();
    (this.state.borough.length > 0) ? this.props.search(this.state.borough) : borough = "";
  }

  componentDidUpdate(prevProps){
    if (this.props.match.params.id != prevProps.match.params.id) {
      this.props.requestBusinesses();
    }
  }

  updateSearch(e) {
    // debugger;
    e.preventDefault();
    let query = e.currentTarget.value;
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

  handleSearch(e) {
    // debugger;
    let query = document.getElementById('search-field').value
    console.log(query);
    this.setState({ query });
    
    
    (query) ? this.props.search(query) : query = "";
    this.props.history.push('/search/' + query );
    // debugger;
  }

  render() {
    const { businesses, users } = this.props;
    debugger;
    if (businesses.length > 0) {
      debugger;
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
          <div className="biz-index-item-wrapper">
            <div className="biz-index-pic">
              <img className="canal" src={window.canal} />
            </div>
            <div className="biz-index-info">
              <h1>{biz.name}</h1>
              <section className="static-rating-splash">{basketballs}</section>
              <h1>{biz.neighborhood}</h1>
            </div>

          </div>
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

export default BizFilter;