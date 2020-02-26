import React from 'react';
// import { requestBusinesses } from '../../actions/biz_actions';
import { Link } from 'react-router-dom';


class BizIndexItem extends React.Component {
  constructor(props){
    super(props);
    let { borough } = ""; //notsure about this yet.
    console.log(borough)
    this.state = { borough };
    this.handleFilter = this.handleFilter.bind(this);
    this.getPhotoUrl = this.getPhotoUrl.bind(this);
    console.log(props);
    // debugger;
  }

  handleFilter(e) {
    // debugger;
    let borough = e.currentTarget.value
    console.log(borough);
    this.setState({ borough });
    
    
    (borough) ? this.props.filterByBorough(borough) : borough = "";
    this.props.history.push('/filter/' + borough );
    // debugger;
  }

  getPhotoUrl(photoObj, businessId) {
    let result = "";
    // debugger;

    Object.values(photoObj).forEach( photo => {
      if (photo.business_id === businessId) {
        result = photo.photoUrl;
      }
    })
    return result;
  }

  componentDidMount(){
    this.props.requestBusinesses();
    
    // this.props.requestPhotos();
  }
  capitalizeWord(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }

  render(){
    const { businesses } = this.props;

    const bizKeys = Object.keys(businesses);
    const b1 = businesses[bizKeys[0]];
    const b2 = businesses[bizKeys[1]];
    const b3 = businesses[bizKeys[2]];


      // if (Object.keys(businesses).length) {
        // debugger;
      // if (Object.values(this.props.photos).length > 0) {
        if (b1 && b2 && b3) {
          const basketball1 = [];
          for (let i = 1; i <= 5; i++) {
            let klass = 'ball-icon-header';
            if (b1.rating >= i) {
              klass += ' is-selected';
            }
            const icon =
              <img
                key={i}
                className={klass}
                src={window.ballicon}
              />;
            basketball1.push(icon);
          } 
            const basketball2 = [];
            for (let i = 1; i <= 5; i++) {
            let klass = 'ball-icon-header';
              if (b2.rating >= i) {
                klass += ' is-selected';
              }
              const icon =
                <img
                  key={i}
                  className={klass}
                  src={window.ballicon}
                />;
            basketball2.push(icon);
            }
            const basketball3 = [];
            for (let i = 1; i <= 5; i++) {
              let klass = 'ball-icon-header';
            if (b3.rating >= i) {
              klass += ' is-selected';
            }
              const icon =
                <img
                  key={i}
                  className={klass}
                  src={window.ballicon}
                />;
            basketball3.push(icon);
          }
          return (
          <>
            <div className="hoopr-brooklyn-container">
              <h3>Hoopr NYC</h3>
              <div className="bk-neighborhoods">
                <button id="neighborhood-links" value="queens" onClick={this.handleFilter}>Queens</button>
                <button id="neighborhood-links" value="brooklyn" onClick={this.handleFilter}>Brooklyn</button>
                <button id="neighborhood-links" value="manhattan" onClick={this.handleFilter}>Manhattan</button>
                <button id="neighborhood-links" value="bronx" onClick={this.handleFilter}>Bronx</button>
                <button id="neighborhood-links" value="staten island" onClick={this.handleFilter}>Staten Island</button>
  {/* 
                <Link id="neighborhood-links" to="/">Queens</Link>
                <Link id="neighborhood-links" to="/">Brooklyn</Link>
                <Link id="neighborhood-links" to="/">Manhattan</Link>
                <Link id="neighborhood-links" to="/">Bronx</Link>
                <Link id="neighborhood-links" to="/">Staten Island</Link> */}
              </div>
              <div className="hr-row splash"></div>
            </div>

            <div className="biz-index-items-container">
              <div className="biz-index-item b1">
                <div className="row-1">
                    <img className="rucker" src={this.getPhotoUrl(this.props.photos, b1.id)} />
                </div>
                <div className="row-2">
                  <Link className="b-name" to={`/businesses/${b1.id}`}><h3 id="biz-name-index">{b1.name}</h3></Link>
                  <section className="static-rating-splash">{basketball1}</section>
                  <button className="b-borough" value="manhattan" onClick={this.handleFilter}>{this.capitalizeWord(b1.borough)}</button><br></br>
                  <button className="b-borough" value="harlem" onClick={this.handleFilter}>{b1.neighborhood}</button>
                </div>
              </div>

              <div className="biz-index-item b2">
                <div className="row-1">
                  <img className="cage" src={this.getPhotoUrl(this.props.photos, b2.id)} />
                </div>
                <div className="row-2">
                  <Link className="b-name" to={`/businesses/${b2.id}`}><h3 id="biz-name-index">{b2.name}</h3></Link>
                  <section className="static-rating-splash">{basketball2}</section>
                  <button className="b-borough" value="manhattan" onClick={this.handleFilter}>{this.capitalizeWord(b2.borough)}</button><br></br>
                  <button className="b-borough" value="west village" onClick={this.handleFilter}>{b2.neighborhood}</button>
                </div>
              </div>

              <div className="biz-index-item b3">
                <div className="row-1">
                  <img className="canal" src={this.getPhotoUrl(this.props.photos, b3.id)} />
                </div>
                <div className="row-2">
                  <Link className="b-name" to={`/businesses/${b3.id}`}><h3 id="biz-name-index">{b3.name}</h3></Link>
                  <section className="static-rating-splash">{basketball3}</section>
                  <button className="b-borough" value="manhattan" onClick={this.handleFilter}>{this.capitalizeWord(b3.borough)}</button>
                  <button className="b-borough" value="lower-manhattan" onClick={this.handleFilter}>{b3.neighborhood}</button>
                </div>
              </div>
            </div>
          </>
        );
        // }
       } else {
        return (null)
      }
  }
}


export default BizIndexItem;