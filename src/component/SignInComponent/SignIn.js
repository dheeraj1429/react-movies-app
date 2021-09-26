import React from "react";
import "./SignIn.css";

function SiginIn() {
  return (
    <>
      <div className="SignInDiv">
        <div className="SignInCard">
          <form>
            <input type="text" name="firstName" placeholder="First name" />
            <input type="text" name="lastName" placeholder="Last name" />
            <input type="email" name="email" placeholder="Enter email" />
          </form>
        </div>
      </div>
    </>
  );
}

export default SiginIn;
