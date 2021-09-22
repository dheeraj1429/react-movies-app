import React from "react";

import "./MoviesCard.css";

function MoviesCard({ backdrop_path, poster_path }) {
  return (
    <div
      className="card"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/w1280${poster_path})`,
      }}
    ></div>
  );
}

export default MoviesCard;
