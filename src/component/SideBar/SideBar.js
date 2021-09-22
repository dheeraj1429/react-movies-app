import React from "react";
import "./SideBar.css";

function SideBar() {
  const iconDataDiv = [
    { iconsClass: "fab fa-facebook-f" },
    { iconsClass: "fab fa-instagram" },
    { iconsClass: "fab fa-twitter" },
    { iconsClass: "fab fa-linkedin-in" },
  ];

  return (
    <>
      <div className="SideBar">
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
