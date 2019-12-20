import React from 'react';
// import { requestBusinesses } from '../../actions/biz_actions';
import { Link } from 'react-router-dom';


class BizIndexItem extends React.Component {
  constructor(props){
    super(props);
    // console.log(props);
    
  }

  componentDidMount(){
    this.props.requestBusinesses();
  }

  render(){
    const { businesses } = this.props;

    const bizKeys = Object.keys(businesses);
    const b1 = businesses[bizKeys[0]];
    const b2 = businesses[bizKeys[1]];
    const b3 = businesses[bizKeys[2]];


      // if (Object.keys(businesses).length) {
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
            <h3>Hoopr Brooklyn</h3>
            <div className="bk-neighborhoods">
              <Link id="neighborhood-links" to="/">Bushwick</Link>
              <Link id="neighborhood-links" to="/">Williamsburg</Link>
              <Link id="neighborhood-links" to="/">Greenpoint</Link>
              <Link id="neighborhood-links" to="/">Park Slope</Link>
              <Link id="neighborhood-links" to="/">Crown Heights</Link>
              <Link id="neighborhood-links" to="/">Bed-Stuy</Link>
            </div>
            <div className="hr-row splash"></div>
          </div>

          <div className="biz-index-items-container">
            <div className="biz-index-item b1">
              <div className="row-1">
                  <img className="rucker" src={window.rucker} />
              </div>
              <div className="row-2">
                <Link className="b-name" to={`/businesses/${b1.id}`}><h3>{b1.name}</h3></Link>
                <section className="static-rating-splash">{basketball1}</section>
                {/* <h3>Court Type: {b1.court_type}</h3> */}
              </div>
            </div>

            <div className="biz-index-item b2">
              <div className="row-1">
                <img className="cage" src={window.cage} />
              </div>
              <div className="row-2">
                <Link className="b-name" to={`/businesses/${b2.id}`}><h3>{b2.name}</h3></Link>
                <section className="static-rating-splash">{basketball2}</section>
              </div>
            </div>

            <div className="biz-index-item b3">
              <div className="row-1">
                <img className="canal" src={window.canal} />
              </div>
              <div className="row-2">
                <Link className="b-name" to={`/businesses/${b3.id}`}><h3>{b3.name}</h3></Link>
                <section className="static-rating-splash">{basketball3}</section>
              </div>
            </div>
          </div>
        </>
      );
      } else {
        return (null)
      }
  }
}


export default BizIndexItem;