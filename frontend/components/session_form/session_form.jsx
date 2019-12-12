import React from 'react';
import { Link } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
    // this.handleErrors = this.handleErrors.bind(this);
    this.state = {
      email: "",
      password: "",
      sessErrors: "session-errors"
    };
  }

  handleSubmit(e){
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.submitForm(user);
    this.handleClick = this.handleClick.bind(this)

  }

  componentDidUpdate(prevProps){
    if (prevProps.errors.length !== this.props.errors.length) {
      
      if (this.props.errors.length > 0) {
        this.setState({ sessErrors: "session-errors show" });
      } else {
        this.setState({ sessErrors: "session-errors" });
      }
    }
  }

  // handleErrors() {
  //   if (this.props.errors.length > 0) {
  //     this.setState( { sessErrors: "session-errors show" });
  //   }
  // }

  handleClick(e){
    e.preventDefault();
    this.props.clearErrors();
  }




  update(field){
    return e => {
      this.setState( { [field]: e.target.value });
    };
  }

  render(){
    const { formType, errors } = this.props;

    // errors.length > 0 ? this.handleErrors() : null;
    
    return(
      <>
        <header id="login-header">
          <Link to="/"><img className="logo" src={window.logo} /></Link>
        </header>
        <ul className={this.state.sessErrors}>
          {errors.map((error, idx) => (
            <li key={idx}>{error}</li>
            
          ))}
          <button onClick={this.handleClick} className="this.state.sessErrors">YOOOO</button>
        </ul>
        <div className="main-container">
          <section className="login-container">
            <h1>Log In to Hoopr!</h1>
            <h3>New to Hoopr? <Link to="/signup" id="signup-link-1">Sign up</Link></h3>
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
              <div className="plain-text">New to Hoopr? <Link to="/signup">Sign up</Link></div>
            </form>
          </section>
          <main className="sidepic">
            <img className="photo" src={window.test} />
          </main>

        </div>
        <footer>
          
        </footer>
      </>
    );
  }

};

export default SessionForm;