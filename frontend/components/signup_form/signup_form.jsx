import React from 'react';

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

  handleSubmit() {
    this.props.submitForm(this.state);
  }

  update(field) {
    return e => {
      this.setState({ [field]: e.currentTarget.value });
    };
  }

  render() {
    const { formType } = this.props;
    return (
      <div>
        <h1>{formType}</h1>
        <form onSubmit={this.handleSubmit}>
          <label>First Name:
            <input
              type="text"
              value={this.state.first_name}
              onChange={this.update("first_name")}
            />
          </label>
          <label>Last Name:
            <input
              type="text"
              value={this.state.last_name}
              onChange={this.update("last_name")}
            />
          </label>
          <label>Email:
            <input
              type="email"
              value={this.state.email}
              onChange={this.update("email")}
            />
          </label>
          <label>Password:
            <input
              type="password"
              value={this.state.password}
              onChange={this.update("password")}
            />
          </label>
          <label>Zipcode:
            <input
              type="number"
              value={this.state.zip_code}
              onChange={this.update("zip_code")}
            />
          </label>
          <button>Sign Up</button>
        </form>
      </div>
    );
  }

};

export default SignupForm;