import React from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.svg";
import "./NavBar.css";
import Search from "./ui/Search";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const NavBar = ({search,loading,handleSearchChange,handleSearch,error}) => {
  const location = useLocation();
  let active = false;

  if (location.pathname === "/movies") {
    active = true;
  }
  return (
    <div className={active? "fix--height":""}>
      <nav className="container">
        <div className="row">
          <Link to="/">
            <figure className="logo__wrapper">
              <img
                src={logo}
                alt=""
                className={active ? "logo logo--white" : "logo"}
              />
              <span className={active ? "logo--text--white logo--text" : "logo--text"}>
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
      {active ? <div className="movie__container">
        <div className="row row__movie">
          <h1 className="search__title">Browse our Movies</h1>

          <div className="search__wrapper search__wrapper--movies">
            <Search error={error} placeholder="Search By Name of Movie" search={search} handleSearchChange={handleSearchChange}/>
            
            {loading?<span className='search__btn'><FontAwesomeIcon className='icon' icon="fa-spinner" /></span>:<button className="search__btn" onClick={handleSearch}>
              <FontAwesomeIcon icon="fa-magnifying-glass" className="icon" />
            </button>}
          </div>
          
        </div>  
      </div>:""}
      {active?<div className="overlay"></div>:""}
    </div>
  );
};

export default NavBar;
