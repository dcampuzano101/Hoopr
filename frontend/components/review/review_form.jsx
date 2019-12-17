import React from 'react';
import { logoutCurrentUser } from '../../actions/session_actions';

class ReviewForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      business_id: this.props.match.params.id,
      body: "",
      user_id: currentUser.id,
      rating: ""
    };
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const review = Object.assign({}, this.state);
    this.props.processForm(review).then(this.props.closeModal);
  }

  componentDidMount(){
    //possibly have to render null first
    this.props.requestBusiness(this.props.match.params.id);
  }


  render(){
    return(
      <div>
        <form onClick={this.props.handleSubmit}>
          <div className="review-form">
            <br />
            <label>Rating:
              <input type="number"
                value={this.state.rating}
                onChange={this.update('rating')}
                className="review-form"
              />
            </label>
            <br />
            <label>Body:
              <input type="text"
                value={this.state.body}
                onChange={this.update('body')}
                className="review-form"
              />
            </label>
            <br />
            <input className="review-submit" type="submit" value={this.props.formType} />
          </div>
        </form>
      </div>
    );
  }
}

export default ReviewForm;