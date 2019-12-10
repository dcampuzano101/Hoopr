import React from 'react';

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
      <div>
        <h1>{formType}</h1>
        <ul>
          {errors.map(error => (
            <li>{error}</li>
            ))}
        </ul>
        <form onSubmit={this.handleSubmit}>
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
          <button>Login</button>
        </form>
      </div>
    );
  }

};

export default SessionForm;