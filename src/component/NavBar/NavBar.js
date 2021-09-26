import React, { useState, useEffect } from "react";
import { withRouter } from "react-router";
import "./NavBar.css";

function NavBar({ history, match }) {
  const [Navbar, setNavbar] = useState(false);

  window.addEventListener("scroll", function (e) {
    let scroll = this.scrollY;
    if (scroll >= 10) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  });

  const NavBarDataLink = [{ urlLink: "", id: 1, innerText: "Home" }];

  return (
    <>
      <div className={Navbar ? "Navbar active" : "Navbar"}>
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
                <li>
                  <i className="fas fa-search"></i>
                </li>
                <li>
                  <i
                    className="fas fa-user"
                    onClick={() => {
                      history.push(`${match.url}${"LogIn"}`);
                    }}
                  ></i>
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
