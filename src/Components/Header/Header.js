import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
import "./Header.scss";
// import {LinkContainer} from "react-router-bootstrap"
// import {bootstrap, dropdown}

// const Header = (props) => {
  class Header extends Component {
  constructor(props){
    super(props);
    this.state = {
      dropdownView: false
    }
  }

  handleToggle = () => {
    this.setState({dropdownView: !this.state.dropdownView})
  }
 
  render(){
  return (
    <div className="header-container">
      <h1><Link to="/" className="header-link">On Deck Baseball</Link></h1>
      <div className='dropdown-button' onClick={this.handleToggle}>☰</div>
      {this.state.dropdownView
      ? (<nav onClick={this.handleToggle} className='dropdown-menu'>
          <span ><Link to="/hours" className='drop-links'>Hours</Link></span>
          <span><Link to="/offer" className='drop-links'>What We Offer</Link></span>
          <span><Link to="/appointment" className='drop-links'>Lessons & Cage  Rentals</Link></span>
          <span><Link to="/lessons" className="drop-links">Lessons Information</Link></span>
          <span><Link to="/cart" className='drop-links'>Cart</Link></span>
          <span><Link to="/login" className='drop-links'>Login</Link></span>
      </nav>)
      : null}
    <nav className="desktop-links">
      <span><Link to="/hours" className="nav-links">Hours</Link></span>
      
      <div><span className='dropdown-button' onClick={this.handleToggle} to="/offer" className="nav-links">What We Offer ▾</span>
        {this.state.dropdownView
          ?(<nav onClick={this.handleToggle} className='drop-menu'>
            <span><Link   to="/offer" className="drop-nav-links">Our Services</Link></span>
            <span><Link to="/lessons" className="drop-nav-links">Lessons Information</Link></span>
            </nav>)
        :null}
      </div>
      {/* <span><Link to="/offer" className="nav-links">What We Offer</Link></span> */}
      {/* <span><Link to="/lessons" className="nav-links">Lessons Information</Link></span> */}
      <span><Link to="/appointment" className="nav-links">Lessons & Cage Rentals</Link></span>
      <span><Link to="/cart" className="nav-links"><img src="https://img.icons8.com/ios/30/000000/shopping-cart.png"/></Link></span>
      <span><Link to="/login" className="nav-links"><img src="https://img.icons8.com/ios/32/000000/baseball-player.png"/></Link></span>
    </nav>
    </div>
  );
};
}

export default withRouter(Header);