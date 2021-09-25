import React from "react";
import CustomButton from "../../CustomButtom/CustomButton";
import TvShows from "../../TvShows/TvShows";
import BannerComponent from "../../BannerComponent/BannerComponent";
import Membership from "../../Membership/Membership.component";

import "./HomePage.css";

function HomePage() {
  const num = 3;

  return (
    <>
      <div className="HomePageDiv">
        <div className="bgDiv"></div>
        <div className="HomePageContent">
          <h1>SCOOTT PLGRIM US THE WORLD...</h1>
        </div>

        <div className="spacer"></div>

        <div className="buttonDiv">
          <CustomButton />
        </div>
      </div>

      <TvShows num={num} title="Continue Watching" subTitle="Tv Show" />
      <BannerComponent />
      <TvShows num={num + Math.floor(Math.random() * 6 + 1)} title="New Movies" subTitle="Episode 1" />
      <TvShows num={num + Math.floor(Math.random() * 10 + 1)} title="Best of 2022" subTitle="Movies" />
    </>
  );
}

export default HomePage;
