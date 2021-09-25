import React, { useState } from "react";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";

import "./BannerComponent.css";

function BannerComponent() {
  const [ShowVedio, setShowVedio] = useState(false);
  const [youtubeVedioUrl, SetyoutubeVedioUrl] = useState("");

  const ShowVedioFunction = () => {
    setShowVedio(true);
    SetyoutubeVedioUrl("1p8PuCShE4M");
  };

  const opts = {
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <>
      <div className="BannerComponentDiv">
        <div>
          <YouTube videoId={youtubeVedioUrl} opts={opts} className={ShowVedio ? "ShowVedio" : ""} />
          <div className={ShowVedio ? "showBannerSection" : "BannerIconDiv "}>
            <i class="fas fa-play" onClick={ShowVedioFunction}></i>
          </div>
        </div>
        <div>
          <div className="Line">
            <h1>9.1</h1>
          </div>

          <div className="bannerSecondContent">
            <h1>6 DECEMBER 2020</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever
              since the 1500s
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default BannerComponent;
