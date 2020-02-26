import React from 'react';
import { logoutCurrentUser } from '../../actions/session_actions';
import { Link } from 'react-router-dom';

class PhotoForm extends React.Component {
  constructor(props){
    super(props);
      
    console.log(this.props);
    const { currentBiz, currentUser } = this.props;
      
    this.state = {
      business_id: currentBiz.id,
      description: "",
      user_id: currentUser.id,
      photoFiles: []
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFile = this.handleFile.bind(this);
    // this.ball_out = this.ball_out.bind(this);
    // this.ball_over = this.ball_over.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

//   rate(numRating) {
//     return e => this.setState({
//       rating: numRating
//     });
//   }

//   ball_over(rating) {
//     return e => this.setState({
//       temp_rating: rating
//     });
//   }
            
// this.setState({photoFile: file, photoUrl: fileReader.result});

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
    // this.state.photoFiles.forEach(file => {
    //     formData.append('photo[images][]', file);
    // });

      
    this.props.processForm(formData, this.state.business_id).then(this.props.closeModal);
    this.forceUpdate();
    // this.props.submitForm(formData);
    // e.preventDefault();
    // const photo = Object.assign({}, this.state);
  }

  componentDidMount(){
    //possibly have to render null first
    this.props.requestBusiness(this.props.currentBiz.id);
  }

  render(){
    // const basketballs = [];

    // for (let i = 1; i <= 5; i++) {
    //   let klass = 'ball-icon';
    //   if (this.state.temp_rating >= i && this.state.temp_rating != null) {
    //       klass += ' is-selected';
    //   }
    //   const icon = 
    //     <img 
    //       className={klass}
    //       src={window.ballicon}
    //       onClick={this.rate(i)}
    //       key={i}
    //       onMouseOver={this.ball_over(i)}
    //     />;
    //   basketballs.push(icon);
    // }

    // const { currentBiz } = this.props;
    // if (this.props)
    // return(
    //   <div>
    //     <div className="review-form-container">
    //       <Link to={`/businesses/${currentBiz.id}`}><h1>{currentBiz.name}</h1></Link>
    //         <form onSubmit={this.handleSubmit}>
    //         <section className="form-wrapper">
    //           <div className="ball-rating modal">
    //               {basketballs}
    //           </div>
    //           <label>
                
    //             <textarea
    //               placeholder="I decided to stop by the park. Perfect opportunity to sweat out last night's tacos and cerveza. The gang was all there shooting hoops. One of the best spots to play pick up in nyc. 4/5 Would come back."
    //               // maxlength="5000"
    //               value={this.state.body}
    //               onChange={this.update('body')}
    //               className="review-body"
    //               rows="10"
    //               cols="65">
    //             </textarea>
    //           </label>
    //         </section>
    //         <input className="review-submit" type="submit" value="Post Review" />
    //         </form>
    //     </div>
    //   </div>
    // );
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
                {/* <ul className={this.state.sessErrors}>
                    {errors.map((error, idx) => (
                    <li key={idx}>{error}</li>
        
                    ))}
                    <button id="clearerrors" onClick={this.handleClick} className="this.state.sessErrors">Hit the X to close</button>
                </ul> */}
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