import React from "react";
import { withRouter } from "react-router";
import "./NavBar.css";

function NavBar({ history, match }) {
  const NavBarDataLink = [
    { urlLink: "", id: 1, innerText: "Home" },
    { urlLink: "TvShow", id: 2, innerText: "Tv Show" },
    { urlLink: "Movies", id: 3, innerText: "Movies" },
    { urlLink: "New&Popular", id: 4, innerText: "New & Popular" },
  ];

  const NavBarIconsData = [{ iconClass: "fas fa-search" }, { iconClass: "fas fa-heart" }, { iconClass: "fas fa-user" }];

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
                {NavBarDataLink.map((el) => (
                  <li onClick={() => history.push(`${match.url}${el.urlLink}`)} key={el.id}>
                    {el.innerText}
                  </li>
                ))}
                {NavBarIconsData.map((el) => (
                  <li>
                    <i className={el.iconClass}></i>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default withRouter(NavBar);
