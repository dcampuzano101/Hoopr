
<p align="center"><img src="https://hoopr.herokuapp.com/assets/hoopr_logo-4226649bf78ff71ec2459fabfd440f8a7dc6bf96c69360ebd06348b4a645b0c3.png" /></p>

</hr>

#### Hoopr is a place where basketball enthusiasts can find parks and gyms to play the sport they love. Know before you go: Hoopr allows users to write reviews and check if a park or gym meets their needs.

*Only available in the NYC area.*
</hr>

#### Hoopr: https://hoopr.herokuapp.com/#/

</hr>

## Technologies:

* Ruby on Rails: used to set up Hoopr's backend structure.

* PostgreSQL: used to host our database.

* Javascript: primary language used for our front-end logic.

* jQuery/Ajax: used primarily to make requests to our database.

* React/Redux: used to create functional rendering / displays of our data to users. 

* CSS: used to style HTML elements.
</hr>


## User Authentication:

  * Implemented a multi-step login process that allows Hoopr users to create profiles securely without having to worry about their personal and sensitive information being leaked. We do this through the encryption of passwords and never storing any of their passwords directly into our database. 

## Reviews:
  * Modal that allows users that are logged in to create a review and rate a basketball court. The rating system temporarily sets the state as users choose their rating. The rating then persists and is automatically added to the profile of the basketball court.
</hr>

<p align="center"><img width="100%" src="http://davidcampuzano.com/images/hoopr_review.gif" /></p>

```JSX
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
```

## Search:
  * Hoopr's search function allows users to search by borough, neighborhood, or park name. It also displays a map that is relevant to the user's query.

<p align="center"><img width="100%" src="http://davidcampuzano.com/images/hoopr_search.gif" /></p>
