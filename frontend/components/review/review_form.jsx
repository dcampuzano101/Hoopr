import React from 'react';
import { logoutCurrentUser } from '../../actions/session_actions';
import { Link } from 'react-router-dom';

class ReviewForm extends React.Component {
  constructor(props){
    super(props);
    console.log(`REVIEWFORMPROPS: ${this.props}`);
    const { currentBiz, currentUser } = this.props;
    this.state = {
      business_id: currentBiz.id,
      body: "",
      user_id: currentUser.id,
      rating: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
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

  handleSubmit(e) {
    e.preventDefault();
    const review = Object.assign({}, this.state);
    this.props.processForm(review).then(this.props.closeModal);
  }

  componentDidMount(){
    //possibly have to render null first
    this.props.requestBusiness(this.props.currentBiz.id);
  }


  render(){
    const { currentBiz } = this.props;
    if (this.props)
    return(
      <div>
        <div className="review-form-container">
          <Link to={`/businesses/${currentBiz.id}`}><h1>{currentBiz.name}</h1></Link>
          {/* <img className="ball-icon" src={window.ballicon} />
          <i className="fas fa-basketball-ball"></i> */}
            <form onSubmit={this.handleSubmit}>
            <section className="form-wrapper">
              {/* <label>Rating:
                <input type="number"
                  value={this.state.rating}
                  onChange={this.update('rating')}
                  className="review-rating"
                />
              </label> */}
              <div className="ball-rating">
                <img className="ball-icon" src={window.ballicon} onClick={this.rate("1")} />
                <img className="ball-icon" src={window.ballicon} onClick={this.rate("2")} />
                <img className="ball-icon" src={window.ballicon} onClick={this.rate("3")} />
                <img className="ball-icon" src={window.ballicon} onClick={this.rate("4")} />
                <img className="ball-icon" src={window.ballicon} onClick={this.rate("5")} />
              </div>
              <label>
                
                <textarea
                  placeholder="I decided to stop by the park. Perfect opportunity to sweat out last night's tacos and cerveza. The gang was all there shooting hoops. One of the best spots to play pick up in nyc. 4/5 Would come back."
                  // maxlength="5000"
                  value={this.state.body}
                  onChange={this.update('body')}
                  className="review-body"
                  rows="10"
                  cols="65">
                </textarea>
              </label>
            </section>
            <input className="review-submit" type="submit" value="Post Review" />
            </form>
        </div>






          

      </div>
    );
  }
}

export default ReviewForm;