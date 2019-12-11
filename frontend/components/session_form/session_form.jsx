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

  handleSubmit(){
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
          <main>
            <section className="login-form">
              <h1>Log In to Hoopr!</h1>
              <h3>New to yelp? <Link to="/signup" id="signup-link-1">Sign up</Link></h3>
              <ul>
                {errors.map((error, idx) => (
                  <li key={idx}>{error}</li>
                  ))}
              </ul>
              <form onSubmit={this.handleSubmit}>
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
                <Link to="#" className="plain-text">Forgot password?</Link>
                <button idName="login">Login</button>
                <div className="plain-text">New to yelp? <Link to="/signup">Sign up</Link></div>
              </form>
            </section>
          </main>

        </div>
        <footer>

        </footer>
      </>
    );
  }

};

export default SessionForm;