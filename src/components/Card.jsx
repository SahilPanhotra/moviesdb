import React from "react";
import "./Card.css"

const Card = ({imdbID,type,year,image,title}) => {
  return (
    <>
      
          <a href="" className="card">
            <img
              src={image}
              className="card__image"
              alt=""
            />
            <div className="card__overlay">
              <div className="card__header">
                <svg className="card__arc" xmlns="http://www.w3.org/2000/svg">
                  <path  d="M 40 80 c 22 0 40 -22 40 -40 v 40 Z" />
                </svg>
                <div className="card__header-text">
                  <h3 className="card__title">{title}</h3>
                  <span className="card__status">{year}</span>
                </div>
              </div>
              <p className="card__description">
                Type: {type} <br />
                Imdb Id:{imdbID} 
              </p>
            </div>
          </a>
    </>
  );
};

export default Card;
