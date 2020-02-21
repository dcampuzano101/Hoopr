import React from 'react';
import { Link } from 'react-router-dom';

class Footer extends React.Component {


  render(){
    return(
      <>
        <footer className="footer-container">
          <a href="https://angel.co/david-campuzano-1" className={"nav-links " + 'footer'}><i className="fab fa-angellist"></i></a>
          <a href="https://www.linkedin.com/in/david-campuzano-992882168/" className={"nav-links " + 'footer'}><i className="fab fa-linkedin"></i></a>
          <a href="https://github.com/dcampuzano101" className={"nav-links " + 'footer'}><i className="fab fa-github"></i></a>
        </footer>
      </>
    );
  }
}

export default Footer;