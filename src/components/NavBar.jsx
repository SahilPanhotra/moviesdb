import React from "react";
import logo from "../assets/logo.svg";
import './NavBar.css'
const NavBar = () => {
  return (
    <div>
      <nav className="container">
        <div className="row">
          <figure className="logo__wrapper">
            <img src={logo} alt="" className="logo" />
            <span className="logo--text">MoviesDB</span>
          </figure>
          <div className="links__wrapper">
            <div className="link">
              <button className="btn contact-us">Contact Us</button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
