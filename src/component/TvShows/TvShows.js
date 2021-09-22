import React, { useState, useEffect } from "react";
import axios from "axios";

import "./TvShows.css";

function TvShows() {
  const [Collection, setCollection] = useState([]);

  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=3`)
      .then((res) => {
        setCollection(res.data.results);
      })
      .catch((err) => console.log(err));
  }, []);

  const filterArr = Collection.filter((index, item) => item < 8);
  console.log(filterArr);

  return (
    <div className="TvShowDiv">
      <div className="TvShowInner">
        {filterArr.map((el) => (
          <div className="card">{el.length}</div>
        ))}
      </div>
    </div>
  );
}

export default TvShows;
