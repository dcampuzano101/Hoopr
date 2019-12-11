import React from 'react';
import { Route, Link } from 'react-router-dom';
class Header extends React.Component {
  
  render(){
    debugger;
    const { currentUser, logout } = this.props;
    // console.log(this.props);
    // console.log(currentUser);
    // console.log(Boolean(currentUser));
    const display = () => {
      const sessionLinks = () => (
        <div className="session-links">
          <Link to="/login" className="nav-links">Log in</Link>
          <Link to="/signup" className="sign-up-btn">Sign up</Link>
        </div>
      );

      const profileIcon = () => (
        <div className="profile-pic">
          <img src="https://s3-media2.fl.yelpcdn.com/photo/TLM2bUDHKT9Byu5L0bUCCA/90s.jpg" alt="profile"  />
          <button onClick={logout}>Logout</button>
        </div>
      )
      return currentUser ? profileIcon() : sessionLinks();
    }
    return(
      <header className="splash-header">
        {/* <img className="photo" src={window.test} /> */}
        <div className="nav-bar">
          <section>
            <Link to="#" className="nav-links">Write a Review</Link>
            <Link to="#" className="nav-links">Events</Link>
            <Link to="#" className="nav-links">Talk</Link>
          
            
          </section>
            {display()}
        </div>
      </header>
    );
  }

}

export default Header;