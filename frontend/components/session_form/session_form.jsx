import React from 'react';
import { Link } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      email: "",
      password: ""
    };
  }

  handleSubmit(e){
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.submitForm(user);

  }

  update(field){
    return e => {
      this.setState( { [field]: e.currentTarget.value });
    };
  }

  render(){
    const { formType, errors } = this.props;
    return(
      <>
        <header id="login-header">
          <div>
            <p>Hoopr logo goes here</p>
          </div>
        </header>
        <div className="main-container">
          <section className="login-container">
            <h1>Log In to Hoopr!</h1>
            <h3>New to yelp? <Link to="/signup" id="signup-link-1">Sign up</Link></h3>
            <ul>
              {errors.map((error, idx) => (
                <li key={idx}>{error}</li>
                ))}
            </ul>
            <form className="login-form" onSubmit={this.handleSubmit}>
              <label>
                <input 
                placeholder="Email"
                type="email"
                value={this.state.email}
                onChange={this.update("email")}
                className="plain-input"
                />
              </label>
              <label>
                <input
                  placeholder="Password"
                  type="password"
                  value={this.state.password}
                  onChange={this.update("password")}
                  className="plain-input"
                />
              </label>
              <span className="forgot-password">
                <Link to="#" className="plain-text">Forgot password?</Link>
              </span>
              <button id="login">Login</button>
              <div className="plain-text">New to yelp? <Link to="/signup">Sign up</Link></div>
            </form>
          </section>
          <main>
            <p>THIS IS A STANDIN CONTAINER</p>
          </main>

        </div>
        <footer>

        </footer>
      </>
    );
  }

};

export default SessionForm;