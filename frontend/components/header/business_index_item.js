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
    debugger;
    const { businesses } = this.props;

    const bizKeys = Object.keys(businesses);
    const b1 = businesses[bizKeys[0]];
    const b2 = businesses[bizKeys[1]];
    const b3 = businesses[bizKeys[2]];


      if (Object.keys(businesses).length) {
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
            <div className="biz-index-item">
              <h3>{b1.name}</h3>

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