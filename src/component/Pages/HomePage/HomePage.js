import React from "react";
import CustomButton from "../../CustomButtom/CustomButton";
import TvShows from "../../TvShows/TvShows";

import "./HomePage.css";

function HomePage() {
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

      <TvShows />
    </>
  );
}

export default HomePage;
