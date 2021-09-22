import React, { useState, useEffect } from "react";
import MoviesCard from "../MoviesCard/MoviesCard";
import { useContext } from "react";
import "./TvShows.css";

import { DataContext } from "../../App";

function TvShows() {
  const data = useContext(DataContext);
  const [Collection, setCollection] = useState([]);

  useEffect(() => {
    setCollection(data);
  }, []);

  const filterArr = Collection.filter((index, item) => item < 8);

  return (
    <div className="TvShowDiv">
      <div className="TvShowHeader">
        <div className="TvShowButton">
          <p>TvShowButton</p>
        </div>
      </div>
      <div className="TvShowInner">
        {filterArr.map(({ id, ...otherProps }) => (
          <MoviesCard key={id} {...otherProps} />
        ))}
      </div>
    </div>
  );
}

export default TvShows;
