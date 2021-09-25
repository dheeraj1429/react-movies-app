import React, { useEffect, useState } from "react";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";
import { Link } from "react-router-dom";

import "./MoviesShowPage.css";

function MoviesShowPage(props) {
  const [Trailer, setTrailer] = useState("");
  const [vedioId, setvedioId] = useState("");
  const title = props.location.AllDataCollection.title;

  useEffect(() => {
    movieTrailer(title).then((res) => {
      setTrailer(res);
      const UrlParam = new URLSearchParams(new URL(res).search);
      setvedioId(UrlParam.get("v"));
    });
  }, []);

  const opts = {
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <>
      <div className="vedioPlayDiv">
        <Link to="/">
          <div className="BackButtonDiv">
            <i class="fas fa-arrow-left"></i>
          </div>
        </Link>
        <YouTube videoId={vedioId} opts={opts} className="youtubeVedio" />
      </div>
    </>
  );
}

export default MoviesShowPage;
