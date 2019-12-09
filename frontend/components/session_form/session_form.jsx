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
    this.props.submitForm();
  }

  update(field){
    return e => {
      this.setState( { [field]: e.currentTarget.value });
    };
  }

  render(){
    const { formType, submitForm,  } = this.props;
    return(
      <div>
        <h1></h1>
      </div>
    );
  }

};

export default SessionForm;