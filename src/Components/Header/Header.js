import React from "react";
import { withRouter, Link } from "react-router-dom";
import "./Header.scss";

const Header = (props) => {
  // console.log(props)
  return (
    <div className="header-container">
      <h1 className="header-logo">
        <Link to="/" className="header-link">
          On Deck Baseball
        </Link>
      </h1>

      {/* <Link to='/' className='nav-links'>Home</Link> */}
      <Link to="/hours" className="nav-links">Hours</Link>
      <Link to="/offer" className="nav-links">What We Offer</Link>
      <Link to="/appointment" className="nav-links">Lessons & Cage Rentals</Link>
      {/* <Link to="/account" className="nav-links">Account</Link> */}
      <Link to="/cart" className="nav-links">
      <img src="https://img.icons8.com/ios/30/000000/shopping-cart.png"/>
      </Link>
      <Link to="/login" className="nav-links">
      <img src="https://img.icons8.com/ios/32/000000/baseball-player.png"/>
      </Link>
      {/* <Link to="/logout" className="nav-links">Log out</Link> */}
    </div>
  );
};

export default withRouter(Header);