import React from 'react';

class Rating extends React.Component {
  

  render(){
    
  }
}

export default Rating;

var Rating = React.createClass({
  propTypes: {
    disabled: React.PropTypes.bool
  },
  getInitialState() {
    return {
      rating: this.props.rating || null,
      temp_rating: null
    };
  },
  rate(rating) {
    this.setState({
      rating: rating,
      temp_rating: rating
    });
  },
  star_over(rating) {
    this.state.temp_rating = this.state.rating;
    this.state.rating = rating;

    this.setState({
      rating: this.state.rating,
      temp_rating: this.state.temp_rating
    });
  },
  star_out() {
    this.state.rating = this.state.temp_rating;

    this.setState({ rating: this.state.rating });
  },
  render() {
    var stars = [];

    for (var i = 0; i < 5; i++) {
      var klass = 'star-rating__star';

      if (this.state.rating >= i && this.state.rating != null) {
        klass += ' is-selected';
      }

      stars.push(
        <label
          className={klass}
          onClick={this.rate.bind(this, i)}
          onMouseOver={this.star_over.bind(this, i)}
          onMouseOut={this.star_out}>
          ★
        </label>
      );
    }

    return (
      <div className="star-rating">
        {stars}
      </div>
    );
  }
});