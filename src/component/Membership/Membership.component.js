import React, { useState } from "react";
import { withRouter } from "react-router";
import "./Membership.style.css";

function Membership() {
  const [User, setUser] = useState({
    email: "",
  });
  const [hideInput, sethideInput] = useState(false);

  const [Title, setTitle] = useState("Ready to watch? Enter your email to create or your membership.");

  let name, value;
  const ChangeHandler = (e) => {
    name = e.target.name;
    value = e.target.value;

    setUser({ ...User, [name]: value.toLowerCase() });
  };

  const { email } = User;

  const getData = async (e) => {
    e.preventDefault();

    if (email && email.includes("@")) {
      const res = await fetch(`https://react-movies-app-d6f01-default-rtdb.firebaseio.com/react-data.json`, {
        method: "POST",
        body: JSON.stringify({
          User,
        }),
      });

      if (res) {
        setUser({
          email: "",
        });

        setTitle("Thanks for purchasing pro membership !!!");
        sethideInput(true);
        // history.push(`${match.url}${"MoviesProMember"}`);
      }
    } else {
      alert("please enter yout email");
    }
  };

  return (
    <div className="MemberShipBanner">
      <div className="MemberShipInnerDiv">
        <h3>{Title}</h3>
        <div className="inputDiv">
          <form method="POST" className={hideInput ? "hideInput" : ""}>
            <input type="email" placeholder="Enter Adress" name="email" value={User.email} onChange={ChangeHandler}></input>
            <button type="submit" className="GetStart" onClick={getData}>
              GET START
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default withRouter(Membership);
