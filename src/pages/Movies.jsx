import React from "react";
import "./Movies.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Search from "../components/ui/Search";

const Movies = () => {
  return (
    <>
      <div className="movie__container">
        <div className="row row__movie">
        <h1 className="search__title">Browse our Movies</h1>
          
            <div className="search__wrapper">
              <Search search="Search By Name of Movie" />
              <button className="search__btn">
                <FontAwesomeIcon icon="fa-magnifying-glass" className="icon" />
              </button>
            </div>
            <div className="overlay"></div>
          
        </div>
      </div>
    </>
  );
};

export default Movies;
