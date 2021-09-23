import React, { useState, useEffect } from "react";
import MoviesCard from "../MoviesCard/MoviesCard";
import { useContext } from "react";
import HeaderSection from "../headerSection/HeaderSection";
import axios from "axios";

import "./TvShows.css";

function TvShows() {
  const [Collection, setCollection] = useState([]);
  const [num, setnum] = useState(3);

  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=${num}`)
      .then((res) => {
        setCollection(res.data.results);
      })
      .catch((err) => console.log(err));
  }, [num]);

  const filterArr = Collection.filter((index, item) => item < 8);
  const filterMoviesDiv = Collection.filter((index, el) => el < 5);
  console.log(filterMoviesDiv);

  return (
    <div className="TvShowDiv">
      <div className="Container">
        <HeaderSection innerText="Continue Watching" />

        <div className="ContenueWatchingDivCard">
          <div className="ContenueWatchingInnerCard">
            <div className="ContenueWatchingImgDiv"></div>
            <div className="ContenueWatchingContentDiv">
              <h3>title</h3>
              <p>Episode 1</p>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text
                ever since the 1500s,
              </p>
            </div>
          </div>
        </div>

        <HeaderSection innerText="Tv Show" />
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
