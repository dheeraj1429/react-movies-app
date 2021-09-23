import React from "react";
import "./MoviesShowPage.css";

function MoviesShowPage(props) {
  console.log(props.location.AllDataCollection);
  return (
    <>
      <div className="vedioPlayDiv">
        <iframe src="https://www.youtube.com/embed/-FmWuCgJmxo?autoplay=1" className="vedioPlayer"></iframe>
      </div>
    </>
  );
}

export default MoviesShowPage;
