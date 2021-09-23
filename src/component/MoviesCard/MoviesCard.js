import React from "react";
import { Link } from "react-router-dom";

import "./MoviesCard.css";

function MoviesCard({ poster_path, original_language, overview, popularity, title, vote_average }) {
  return (
    <>
      <Link
        to={{
          pathname: "/MoviesShowPage",
          AllDataCollection: {
            posterPath: poster_path,
            originalLanguage: original_language,
            overview: overview,
            popularity: popularity,
            title: title,
            voteAverage: vote_average,
          },
        }}
      >
        <div
          className="card"
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/w1280${poster_path})`,
          }}
        ></div>
      </Link>
    </>
  );
}

export default MoviesCard;
