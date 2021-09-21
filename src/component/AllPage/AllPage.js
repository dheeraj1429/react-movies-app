import React from "react";
import HomePage from "../Pages/HomePage/HomePage";
import NavBar from "../NavBar/NavBar";
import TvShowPage from "../Pages/TvShowPage/TvShowPage";
import { Route, Switch, Link } from "react-router";

const AllPage = () => {
  return (
    <>
      <NavBar />

      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/TvShowPage" component={TvShowPage} />
      </Switch>
    </>
  );
};

export default AllPage;
