import React from 'react';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      username: "",
      password: ""
    };
  }

  handleSubmit(){
    this.props.submitForm(this.state);
  }

  update(field){
    return e => {
      this.setState( { [field]: e.currentTarget.value });
    };
  }

  render(){
    const { formType, submitForm } = this.props;
    
    return(
      <div>
        <h1>{formType}</h1>
        <form onSubmit={this.handleSubmit}>
          <label>Username:
            <input 
            type="text"
            value={this.state.username}
            onChange={this.update("username")}
            />
          </label>
          <label>Password:
            <input
              type="password"
              value={this.state.password}
              onChange={this.update("password")}
            />
          </label>
          <button onClick={this.handleSubmit}></button>
        </form>
      </div>
    );
  }

};

export default SessionForm;