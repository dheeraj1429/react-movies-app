import React from "react";
import { Route, Switch } from "react-router";
import HomePage from "../Pages/HomePage/HomePage";
import NavBar from "../NavBar/NavBar";
import SideBar from "../SideBar/SideBar";
import MoviesShowPage from "../Pages/MoviesShowPage/MoviesShowPage";

const AllPage = () => {
  return (
    <>
      <NavBar />
      <SideBar />

      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/MoviesShowPage" component={MoviesShowPage} />
      </Switch>
    </>
  );
};

export default AllPage;
