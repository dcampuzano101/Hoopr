import React from 'react';
import { Link } from 'react-router-dom';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleFile = this.handleFile.bind(this);
    this.state = {
      first_name: "",
      last_name: "",
      password: "",
      email: "",
      zip_code: "",
      sessErrors: "session-errors",
      photoFile: null
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state); 
    const formData = new FormData();
    formData.append('user[first_name]', this.state.first_name)
    formData.append('user[last_name]', this.state.last_name)
    formData.append('user[email]', this.state.email)
    formData.append('user[zip_code]', this.state.zip_code)
    formData.append('user[password]', this.state.password)
    formData.append('user[profile_photo]', this.state.photoFile)

    // debugger;
    this.props.submitForm(formData);
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

  handleFile(e) {
    // debugger;
    const file = e.currentTarget.files[0];
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      this.setState({photoFile: file, photoUrl: fileReader.result});
    };
    if (file) {
      fileReader.readAsDataURL(file);
    }
  }

  handleClick(e) {
    e.preventDefault();
    this.props.clearErrors();
  }

  render() {
    const { formType, errors } = this.props;
    const preview = this.state.photoUrl ? <img src={this.state.photoUrl} /> : null;
    return (
      <>
        <header id="signin-header">
          <Link to="/"><img className="logo" src={window.logo} /></Link>
        </header>
        <ul className={this.state.sessErrors}>
          {errors.map((error, idx) => (
            <li key={idx}>{error}</li>

          ))}
          <button id="clearerrors" onClick={this.handleClick} className="this.state.sessErrors">Hit the X to close</button>
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
                <input 
                  type="file"
                  onChange={this.handleFile}
                />
                <h3>profile photo preview</h3>
                {preview}
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
