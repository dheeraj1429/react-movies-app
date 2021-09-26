import React, { useState } from "react";
import { withRouter } from "react-router";
import "./SignIn.css";

function SiginIn({ history, match }) {
  const [User, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  let nameValue, userValue;
  const changeUserDataHandler = (e) => {
    nameValue = e.target.name;
    userValue = e.target.value;

    setUser({ ...User, [nameValue]: userValue });
  };

  const { firstName, lastName, email } = User;

  const getDataFuntion = async (e) => {
    e.preventDefault();

    const dataRes = await fetch(`https://react-movies-app-d6f01-default-rtdb.firebaseio.com/userForm.json`, {
      method: "POST",
      body: JSON.stringify({
        User,
      }),
    });

    if (dataRes) {
      history.push({
        pathname: "/",
      });
    }
  };

  return (
    <>
      <div className="SignInDiv">
        <div className="SignInCard">
          <form method="POST">
            <input type="text" name="firstName" placeholder="First name" value={User.firstName} onChange={changeUserDataHandler} />
            <input type="text" name="lastName" placeholder="Last name" value={User.lastName} onChange={changeUserDataHandler} />
            <input type="email" name="email" placeholder="Enter email" value={User.email} onChange={changeUserDataHandler} />
            <button type="submit" className="submitButton" onClick={getDataFuntion}>
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default withRouter(SiginIn);
