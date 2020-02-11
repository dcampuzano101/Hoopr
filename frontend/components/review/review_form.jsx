import React from 'react';
import { logoutCurrentUser } from '../../actions/session_actions';
import { Link } from 'react-router-dom';

class ReviewForm extends React.Component {
  constructor(props){
    super(props);
    console.log(this.props);
    const { currentBiz, currentUser } = this.props;
    debugger;
    this.state = {
      business_id: currentBiz.id,
      body: "",
      user_id: currentUser.id,
      rating: this.props.tempRating,
      temp_rating: this.props.tempRating
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    // this.ball_out = this.ball_out.bind(this);
    this.ball_over = this.ball_over.bind(this);
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

  componentDidMount(){
    //possibly have to render null first
    this.props.requestBusiness(this.props.currentBiz.id);
  }

  render(){
    const basketballs = [];

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
      basketballs.push(icon);
    }

    const { currentBiz } = this.props;
    if (this.props)
    return(
      <div>
        <div className="review-form-container">
          <Link to={`/businesses/${currentBiz.id}`}><h1>{currentBiz.name}</h1></Link>
            <form onSubmit={this.handleSubmit}>
            <section className="form-wrapper">
              <div className="ball-rating modal">
                  {basketballs}
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