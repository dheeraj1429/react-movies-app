import React, { useState } from "react";
import "./SideBar.css";

function SideBar() {
  const [showSideBar, SetshowSideBar] = useState(false);

  const callBackFuntion = () => {
    SetshowSideBar(true);
  };

  const iconDataDiv = [
    { iconsClass: "fab fa-facebook-f" },
    { iconsClass: "fab fa-instagram" },
    { iconsClass: "fab fa-twitter" },
    { iconsClass: "fab fa-linkedin-in" },
  ];

  return (
    <>
      <div className={showSideBar ? "SideBar hideSideBar" : "SideBar"} onMouseEnter={callBackFuntion}>
        <div className="iconDiv">
          {iconDataDiv.map((el) => (
            <div className="iconInner">
              <i className={el.iconsClass}></i>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default SideBar;
