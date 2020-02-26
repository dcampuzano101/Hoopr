import React from 'react';
import { Route, Link } from 'react-router-dom';
class Header extends React.Component {
  constructor(props){
      super(props);
      console.log(props);

        
      let { query } = ""; //notsure about this yet.
      console.log(query)
      this.state = { query };
      this.updateSearch = this.updateSearch.bind(this);
      this.handleSearch = this.handleSearch.bind(this);

      this.handleDemoSubmit = this.handleDemoSubmit.bind(this);
  }

  handleDemoSubmit(e) {
    e.preventDefault();
    const user = { email: "chefcurry@warriors.com", password: "splashbro" }
    this.props.submitForm(user);
    this.forceUpdate();
  }

  randomBiz(obj) {
    let keys = Object.keys(obj);
    return obj[keys[keys.length * Math.random() << 0]];
  }

  updateSearch(e) {
      
    e.preventDefault();
    let query = e.currentTarget.value;
    // this.setState({ query });
    // this.props.history.push('/search' + query )
  }



  handleSearch(e) {
      
    let query = document.getElementById('search-field').value
    console.log(query);
    this.setState({ query });
    
    
    (query) ? this.props.search(query) : query = "";
    this.props.history.push('/search/' + query );
      
  }
  
  render(){
      
    const { currentUser, logout } = this.props;

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
          <div className="profile-pic">
            <Link to={`/users/${currentUser.id}`}><img className="yelp-profile" src={currentUser.profilePhotoUrl} /></Link>
            <button className="nav-links" id="logout" onClick={logout}>Logout</button>
          </div>
        </div>
        
      )
      return currentUser ? profileIcon() : sessionLinks();
    }
    return(
      <div>
        <header className={"splash-header " + this.props.extraClass}>
          <div className="new-header-container">
            <div className="nav-bar">
              {display()}
            </div>
            <div className={"search " + this.props.extraClass}>
              <div className={"search-bar " + this.props.extraClass}>
                <span id="static-search">Search</span>
                <input
                  id="search-field"
                  className={"search-field " + this.props.extraClass}
                  type="text"
                  value={this.state.query}
                  placeholder="borough, neighborhood, or name..."
                />
                <span id="divider">|</span>
                <span id="static-search-near">Near</span>
                <input
                  className={"search-field-brooklyn " + this.props.extraClass}
                  type="text"
                  placeholder="Brooklyn, NY"
                />
                <div className="ball-container">
                <button className={"search-btn " + this.props.extraClass} onClick={this.handleSearch}><img className="search-ball" src={window.ball} /></button>
                </div>
              </div>
            </div>
            <section className="links-header">
              {/* <Link to="#" className={"nav-links " + this.props.extraClass}>Write a Review</Link> */}
              <Link to="/businesses" className={"nav-links " + this.props.extraClass}>All Parks</Link>
              <a href="https://angel.co/david-campuzano-1" className={"nav-links " + this.props.extraClass}><i className="fab fa-angellist"></i></a>
              <a href="https://www.linkedin.com/in/david-campuzano-992882168/" className={"nav-links " + this.props.extraClass}><i className="fab fa-linkedin"></i></a>
              <a href="https://github.com/dcampuzano101" className={"nav-links " + this.props.extraClass}><i className="fab fa-github"></i></a>
            </section>
            <Link id="logo-wrapper" to="/"><img id="logo-biz-page" src={window.logo} /></Link>
            <div className="logo-header-div">
              <Link id="logo-header" to="/"><img className={"logo-header " + this.props.extraClass} src={window.logo} /></Link>
            </div>
          </div>
        </header>
      </div>
    );
  }
}

export default Header;