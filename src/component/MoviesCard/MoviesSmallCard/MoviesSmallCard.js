import React from "react";
import "./MoviesSmallCard.css";

function MoviesSmallCard({ backdrop_path, title, release_date, overview, poster_path }) {
  return (
    <div className="ContenueWatchingInnerCard">
      <div
        className="ContenueWatchingImgDiv"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/w1280${poster_path})`,
        }}
      ></div>
      <div className="ContenueWatchingContentDiv">
        <h3>{title}</h3>
        <p>{release_date}</p>
        <p>{overview.slice(0, 100)}</p>
        <div className="average"></div>
      </div>
    </div>
  );
}

export default MoviesSmallCard;
