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
          <Link to="/login" className="log-in">Log in</Link>
          &nbsp;or&nbsp;
          <Link to="/signup" className="sign-up">Sign up</Link>
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
      <div className="nav-bar">
        <section className="nav-links">
          <button>Write a Review</button>
          <button>Events</button>
          <button>Talk</button>
        </section>
        {display()}
      </div>
    );
  }

}

export default Header;