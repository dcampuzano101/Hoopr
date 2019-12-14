import React from 'react';
import { Route, Link } from 'react-router-dom';
class Header extends React.Component {
  constructor(props){
      super(props);
      console.log(props);

      this.handleDemoSubmit = this.handleDemoSubmit.bind(this);
  }

  handleDemoSubmit(e) {
    e.preventDefault();
    const user = { email: "chefcurry@warriors.com", password: "splashbro" }
    this.props.submitForm(user);
  }
  
  render(){
    const { currentUser, logout } = this.props;
    // console.log(this.props);
    // console.log(currentUser);
    // console.log(Boolean(currentUser));
    const display = () => {
      const sessionLinks = () => (
        <div className={"session-links " + this.props.extraClass}>
          <Link to="/login" className={"log-in-btn " + this.props.extraClass}>Log in</Link>
          <Link to="/signup" className={"sign-up-btn " + this.props.extraClass}>Sign up</Link>
          <button className={"demo-login-btn " + this.props.extraClass}onClick={this.handleDemoSubmit}>demo login</button>
        </div>
      );

      const profileIcon = () => (
        <div className="right-nav-bar">
          <Link to="#"><img className="fav-icon" src={window.cloud} /></Link>
          <Link to="#"><img className="fav-icon" src={window.whistle} /></Link>
          <div className="profile-pic">
            <img src="https://s3-media2.fl.yelpcdn.com/photo/TLM2bUDHKT9Byu5L0bUCCA/90s.jpg" alt="profile"  />
            <button className="nav-links" id="logout" onClick={logout}>Logout</button>
          </div>
        </div>
      )
      return currentUser ? profileIcon() : sessionLinks();
    }
    return(
      <div>
        <header className={"splash-header " + this.props.extraClass}>
          <div className="nav-bar">
            <section>
              <Link to="#" className={"nav-links " + this.props.extraClass}>Write a Review</Link>
              <Link to="#" className={"nav-links " + this.props.extraClass}>Events</Link>
              <Link to="#" className={"nav-links " + this.props.extraClass}>Talk</Link>
            
              
            </section>
              {display()}
          </div>
          <div className={"search " + this.props.extraClass}>
            <div className={"search-bar " + this.props.extraClass}>
              <span id="static-search">Find</span>
              <input
                className={"search-field " + this.props.extraClass}
                type="search"
                placeholder="basketball courts, parks.. "
              />
              <span id="divider">|</span>
              <span id="static-search">Near</span>
              <input
                className={"search-field " + this.props.extraClass}
                type="search"
                placeholder="Brooklyn, NY"
              />
              <div className="ball-container">
              <button className={"search-btn " + this.props.extraClass}><img className="search-ball" src={window.ball} /></button>
              </div>
            </div>
          </div>
        </header>
        <footer>
          
        </footer>
      </div>

    );
  }

}

export default Header;

//              <input
// type = "submit"
// className = "search-btn"
//   />