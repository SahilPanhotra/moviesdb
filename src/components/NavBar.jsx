import React from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.svg";
import "./NavBar.css";
const NavBar = ({ color }) => {
  const location = useLocation();
  let active = false;

  if (location.pathname === "/movies") {
    active = true;
  }
  return (
    <div>
      <nav className="container">
        <div className="row">
          <Link to="/">
            <figure className="logo__wrapper">
              <img
                src={logo}
                alt=""
                className={active ? "logo logo--white" : "logo"}
              />
              <span className={active ? "logo--text--white" : "logo--text"}>
                MoviesDB
              </span>
            </figure>
          </Link>
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
