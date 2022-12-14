import React from "react";
import "./Movies.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Search from "../components/ui/Search";
import Card from "../components/Card";

const Movies = ({ movies,search,error }) => {
  
  
  return (
    <>
      <section className="movies__result">
        <h2 className="search__results--heading">Search results: {movies?.length>0&&search?.length>0?<span>for {search}</span>:null}</h2>
        <div className="results">
        {movies?.map((movie) =>
        <div key={movie.imdbID} className="card__wrapper">
          <Card
            key={movie.imdbID}
            imdbID={movie.imdbID}
            title={movie.Title}
            year={movie.Year}
            type={movie.Type}
            image={movie.Poster}
          />
          </div>
        )}
        </div>
      </section>
    </>
  );
};

export default Movies;
