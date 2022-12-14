import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import './MovieInfo.css'

const MovieInfo = () => {
   const {id}= useParams();
   const [movie, setMovie] = useState({});
   async function loadMovie() {
    try {
        const {data} = await axios.get(`https://www.omdbapi.com/?i=${id}&apikey=670cf342`);
        setMovie(data);
        console.log(data);
    } catch (error) {
        console.log(error);
    }
 }
   useEffect(() => {
     loadMovie();
   }, [])
   
  return (
    <>
    <div id="movie__body">
      <main id="movie__main">
        <div className="movie__container">
          <div className="movie__row">
            <div className="movie__selected--top">
              <Link to="/movies" className="movie__link">
                <FontAwesomeIcon icon="arrow-left" />
              </Link>
              <Link to="/movies" className="movie__link">
                <h2 className="#ed7a07">movies</h2>
              </Link>
            </div>
            <div className="movie__selected">
              <figure className="movie__selected--figure">
                <img className="movie__selected--img" src={movie.Poster} alt="" />
              </figure>
              <div className="movie__selected--description">
                <h2 className="movie__selected--title">{movie.Title}</h2>
                <p><span className='text__highlight'>Actors:</span> {movie.Actors}</p>
                <div className="movie__selected--price">
                
                <span className='text__highlight'>ImDb Rating:</span> {movie.imdbRating}/10
                </div>
                <div className="movie__summary">
                  {/* <h3 className="movie__summary--title">Plot</h3> */}
                  <p className="movie__summary--para">
                  <span className='text__highlight'>Plot: </span>{movie.Plot}
                  </p>
                  <p className="movie__summary--para">
                  <span className='text__highlight'>Released on: </span> {movie.Released}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
    </>
  ) 
}

export default MovieInfo