import React from "react";
import { Link } from "react-router-dom";
import "./Card.css"

const Card = ({imdbID,type,year,image,title}) => {
  return (
    <>
      
          <Link to={`/movies/${imdbID}`} className="card">
            {image==='N/A'?<img
            src="https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg"
            className="card__image"
            alt=""
          />:<img
          src={image}
          className="card__image"
          alt=""
        />}
            <div className="card__overlay">
              <div className="card__header">
                <svg className="card__arc" xmlns="http://www.w3.org/2000/svg">
                  <path  d="M 40 80 c 22 0 40 -22 40 -40 v 40 Z" />
                </svg>
                <div className="card__header-text">
                  <h3 className="card__title">{title}</h3>
                  <span className="card__status"> {year}</span>
                </div>
              </div>
              <p className="card__description">
                Type: {type} <br />
                Imdb Id:{imdbID} 
              </p>
            </div>
          </Link>
    </>
  );
};

export default Card;
