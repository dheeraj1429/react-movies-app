import React, { useState, useEffect } from "react";
import MoviesCard from "../MoviesCard/MoviesCard";
import HeaderSection from "../headerSection/HeaderSection";
import MoviesSmallCard from "../MoviesCard/MoviesSmallCard/MoviesSmallCard";
import axios from "axios";

import "./TvShows.css";

function TvShows(props) {
  console.log(props.num);
  const [Collection, setCollection] = useState([]);

  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=${props.num}`)
      .then((res) => {
        setCollection(res.data.results);
        console.log(res);
      })
      .catch((err) => console.log(err));
  }, []);

  const filterArr = Collection.filter((index, item) => item < 8);
  const filterMoviesDiv = Collection.filter((index, item) => item < 5);

  return (
    <div className="TvShowDiv">
      <div className="Container">
        <HeaderSection innerText={props.title} />

        <div className="ContenueWatchingDivCard">
          {filterMoviesDiv.map(({ id, ...otherProps }) => (
            <MoviesSmallCard key={id} {...otherProps} />
          ))}
        </div>

        <HeaderSection innerText={props.subTitle} />
        <div className="TvShowInner">
          {filterArr.map(({ id, ...otherProps }) => (
            <MoviesCard key={id} {...otherProps} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default TvShows;
