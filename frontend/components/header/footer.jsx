import React from 'react';
import { Link } from 'react-router-dom';

class Footer extends React.Component {


  render(){
    return(
      <>
        <footer className="footer-container">
          <Link to="#"><img className="fav-icon" src={window.cloud} /></Link>
          <Link to="#"><img className="fav-icon" src={window.whistle} /></Link>
        </footer>
      </>
    );
  }
}

export default Footer;