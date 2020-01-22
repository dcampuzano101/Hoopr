import React from 'react';
import { Link } from 'react-router-dom';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      first_name: "",
      last_name: "",
      password: "",
      email: "",
      zip_code: "",
      sessErrors: "session-errors"
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.submitForm(user);
    this.handleClick = this.handleClick.bind(this);
  }

  update(field) {
    return e => {
      this.setState({ [field]: e.target.value });
    };
  }

  componentDidUpdate(prevProps) {
    if (prevProps.errors.length !== this.props.errors.length) {

      if (this.props.errors.length > 0) {
        this.setState({ sessErrors: "session-errors show" });
      } else {
        this.setState({ sessErrors: "session-errors" });
      }
    }
  }

  handleClick(e) {
    e.preventDefault();
    this.props.clearErrors();
  }

  render() {
    const { formType, errors } = this.props;
    return (
      <>
        <header id="signin-header">
          <Link to="/"><img className="logo" src={window.logo} /></Link>
        </header>
        <ul className={this.state.sessErrors}>
          {errors.map((error, idx) => (
            <li key={idx}>{error}</li>

          ))}
          <button id="clearerrors" onClick={this.handleClick} className="this.state.sessErrors">YOOOO</button>
        </ul>
        <div className="main-signin-container">
          <section className="signin-container">
            <h1>Sign Up for Hoopr!</h1>
            <h3>Connect and shoot hoops locally with Hoopr!</h3>

            <form className="signin-form" onSubmit={this.handleSubmit}>
              <div className="fname-lname">
              <label>
                <input
                  type="text"
                  placeholder="First Name"
                  value={this.state.first_name}
                  onChange={this.update("first_name")}
                  className="plain-input fname"
                  required
                />
              </label>
              <label>
                <input
                  type="text"
                  placeholder="Last Name"
                  value={this.state.last_name}
                  onChange={this.update("last_name")}
                  className="plain-input lname"
                  required
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
                  required
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
          <main className="sidepic-signup">
            <img className="photo" src={window.test} />
          </main>

        </div>
        <footer>
            
        </footer>
      </>
    );
  }

};

export default SignupForm;
