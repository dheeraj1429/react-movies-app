import React from "react";
import CustomButton from "../../CustomButtom/CustomButton";

import "./HomePage.css";

function HomePage() {
  return (
    <>
      <div className="HomePageDiv">
        <div className="HomePageContent">
          <h1>SCOOTT PLGRIM US THE WORLD...</h1>
        </div>

        <div className="spacer"></div>

        <div className="buttonDiv">
          <CustomButton />
        </div>
      </div>
    </>
  );
}

export default HomePage;
