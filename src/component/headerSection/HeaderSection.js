import React from "react";

import "./HeaderSection.css";

function HeaderSection(props) {
  return (
    <div className="TvShowHeader">
      <div className="TvShowButton">
        <p>{props.innerText}</p>
      </div>
    </div>
  );
}

export default HeaderSection;
