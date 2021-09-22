import React from "react";
import HomePage from "../Pages/HomePage/HomePage";
import NavBar from "../NavBar/NavBar";
import SideBar from "../SideBar/SideBar";
import { Route, Switch, Link } from "react-router";

const AllPage = () => {
  return (
    <>
      <NavBar />
      <SideBar />

      <Switch>
        <Route exact path="/" component={HomePage} />
      </Switch>
    </>
  );
};

export default AllPage;
