import React from "react";
import "./BannerComponent.css";

function BannerComponent() {
  return (
    <>
      <div className="BannerComponentDiv">
        <div>
          <div className="BannerIconDiv">
            <i class="fas fa-play"></i>
          </div>
        </div>
        <div>
          <div className="Line">
            <h1>9.1</h1>
          </div>
          {/* <div className="rangeDiv">
            <div className="range"></div>
            <div className="range"></div>
            <div className="range"></div>
          </div> */}

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
