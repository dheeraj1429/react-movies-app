import React from "react";
import { withRouter } from "react-router";
import "./NavBar.css";

function NavBar({ history, match }) {
  const NavBarData = {
    first: "Home",
    second: "Tv Show",
    three: "Movies",
    four: "New & Popular",
  };

  const changePageHandler = (e) => {
    const target = e.target.innerHTML;
    const TrimNav = target.replaceAll(" ", "");
    history.push(`${match.url}${TrimNav}`);
  };

  return (
    <>
      <div className="Navbar">
        <div className="Navbar-Containr">
          <div className="Innner-Navbar">
            <div>
              <h1>Logo</h1>
            </div>
            <div>
              <ul>
                <li onClick={changePageHandler}>{NavBarData.first}</li>
                <li onClick={changePageHandler}>{NavBarData.second}</li>
                <li onClick={changePageHandler}>{NavBarData.three}</li>
                <li onClick={changePageHandler}>{NavBarData.four}</li>
                <li>
                  <i class="fas fa-search"></i>
                </li>
                <li>
                  <i class="fas fa-heart"></i>
                </li>
                <li>
                  <i class="fas fa-user"></i>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default withRouter(NavBar);
