import React, { useState } from "react";
import "./BannerComponent.css";

function BannerComponent() {
  const [ShowVedio, setShowVedio] = useState(false);
  const ShowVedioFunction = () => {
    setShowVedio(true);
  };

  return (
    <>
      <div className="BannerComponentDiv">
        <iframe src="https://www.youtube.com/embed/1p8PuCShE4M?autoplay=1" className={ShowVedio ? "ShowVedio" : ""}></iframe>
        <div>
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
