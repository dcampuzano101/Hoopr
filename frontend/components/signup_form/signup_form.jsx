import React from 'react';
import { Link } from 'react-router-dom';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      username: "",
      password: "",
      email: "",
      first_name: "",
      last_name: "",
      zipcode: ""
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.submitForm(this.state);
  }

  update(field) {
    return e => {
      this.setState({ [field]: e.currentTarget.value });
    };
  }

  render() {
    const { formType, errors } = this.props;
    return (
      <>
        <header id="signin-header">
          <div>
            <p>LOGO GOES HERE</p>
          </div>
        </header>
        <div className="main-signin-container">
          <section className="signin-container">
            <h1>Sign Up for Hoopr!</h1>
            <h3>Connect and shoot hoops locally with Hoopr!</h3>
            <ul>
              {errors.map((error, idx) => (
                <li key={idx}>{error}</li>
              ))}
            </ul>
            <form className="signin-form" onSubmit={this.handleSubmit}>
              <div className="fname-lname">
              <label>
                <input
                  type="text"
                  placeholder="First Name"
                  value={this.state.first_name}
                  onChange={this.update("first_name")}
                  className="plain-input fname"
                />
              </label>
              <label>
                <input
                  type="text"
                  placeholder="Last Name"
                  value={this.state.last_name}
                  onChange={this.update("last_name")}
                  className="plain-input lname"
                />
              </label>
              </div>
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
                  type="password"
                  placeholder="Password"
                  value={this.state.password}
                  onChange={this.update("password")}
                  className="plain-input"
                />
              </label>
              <label>
                <input
                  placeholder="ZIP Code"
                  type="number"
                  value={this.state.zip_code}
                  onChange={this.update("zip_code")}
                  className="plain-input"
                />
              </label>
              <button id="signup">Sign Up</button>
              <div className="plain-text">Already on Hoopr? <Link to="/login">Log in</Link></div>
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

export default SignupForm;
