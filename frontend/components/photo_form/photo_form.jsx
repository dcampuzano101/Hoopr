import React from 'react';
import { logoutCurrentUser } from '../../actions/session_actions';
import { Link } from 'react-router-dom';

class PhotoForm extends React.Component {
  constructor(props){
    super(props);
    const { currentBiz, currentUser } = this.props;
      
    this.state = {
      business_id: currentBiz.id,
      description: "",
      user_id: currentUser.id,
      photoFiles: []
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFile = this.handleFile.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleFile(e) {
        
      e.preventDefault();
      const file = e.currentTarget.files[0];  
      const fileReader = new FileReader();
      
      fileReader.onloadend = () => {
            
      this.setState({photoFile: file, photoUrl: fileReader.result})

      };
      if (file) {
          fileReader.readAsDataURL(file);
      }
  }

  handleSubmit(e) {
    e.preventDefault();
    const photo = Object.assign({}, this.state); 
    const formData = new FormData();
    formData.append('photo[user_id]', this.state.user_id)
    formData.append('photo[business_id]', this.state.business_id)
    formData.append('photo[description]', this.state.description)
    formData.append('photo[photo_file]', this.state.photoFile)
      
    this.props.processForm(formData, this.state.business_id).then(this.props.closeModal);
    this.forceUpdate();
  }

  componentDidMount(){
    this.props.requestBusiness(this.props.currentBiz.id);
  }

  render(){

    const { formType, currentBiz, currentUser } = this.props;
    const preview = this.state.photoUrl ? 
        <>  
            <h3>Photo Preview</h3>
            <img src={this.state.photoUrl} />
        </> : null;

    if (this.props) {
        return (
            <>
                <header id="signin-header">
                    <Link to="/"><img className="logo" src={window.logo} /></Link>
                </header>
                <div>
                    <div className="review-form-container">
                        <Link to={`/businesses/${currentBiz.id}`}><h1>{currentBiz.name}</h1></Link>
                            <form onSubmit={this.handleSubmit}>
                                <section className="form-wrapper">
                                <label>
                                    <textarea
                                        placeholder="Description of photo"
                                        // maxlength="5000"
                                        value={this.state.body}
                                        onChange={this.update('description')}
                                        className="review-body"
                                        rows="5"
                                        cols="32">
                                    </textarea>
                                </label>
                                <label>
                                    <input 
                                        type="file"
                                        name="file"
                                        onChange={this.handleFile}
                                    />
                                    {preview}
                                </label>
                            </section>
                        <input className="review-submit" type="submit" value="Upload Photo" />
                        </form>
                    </div>
                </div>
            </>
        )} else {
        return (null)
    }
  }
}

export default PhotoForm;