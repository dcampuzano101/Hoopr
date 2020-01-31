import React from 'react';
import Header from '../header/header';
import { Link } from 'react-router-dom';
import BizMapContainer from '../biz_map/biz_map_container';

class BizIndex extends React.Component {
  constructor(props){
    console.log(props);
    super(props);
    
  }

  handleDemoSubmit(user) {
    this.props.submitForm(user);
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

  render() {
    const { businesses, users } = this.props;
    if (businesses) {
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

export default BizIndex;