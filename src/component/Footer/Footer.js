import React from "react";

import "./Footer.css";

function Footer() {
  return (
    <>
      <div className="FooterDiv">
        <div className="Links">
          <uL>
            <li className="LinkTitle">ABOUT US</li>
            <li>Home</li>
            <li>Tv Show</li>
            <li>Movies</li>
            <li>News & Popular</li>
          </uL>

          <uL>
            <li className="LinkTitle">HELP CENTER</li>
            <li>Jobs</li>
            <li>Cookie Preferences</li>
            <li>Legal</li>
          </uL>

          <uL>
            <li className="LinkTitle">ACCOUNT</li>
            <li>Wait & Watching</li>
            <li>Only on my account</li>
            <li>Tv Shows</li>
          </uL>

          <uL>
            <li className="LinkTitle">MEDIA CENTER</li>
            <li>Terms of us</li>
            <li>Contact us</li>
          </uL>
        </div>
      </div>
    </>
  );
}

export default Footer;
