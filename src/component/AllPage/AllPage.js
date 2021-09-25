import React from "react";
import { Route, Switch } from "react-router";
import HomePage from "../Pages/HomePage/HomePage";
import NavBar from "../NavBar/NavBar";
import SideBar from "../SideBar/SideBar";
import MoviesShowPage from "../Pages/MoviesShowPage/MoviesShowPage";
import MoviesProMember from "../Pages/MoviesProMember/MoviesProMember";
import Footer from "../Footer/Footer";
import TvShows from "../TvShows/TvShows";

const AllPage = () => {
  return (
    <>
      <NavBar />
      <SideBar />

      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/MoviesShowPage" component={MoviesShowPage} />
        <Route exact path="/MoviesProMember" component={MoviesProMember} />
      </Switch>

      <Footer />
    </>
  );
};

export default AllPage;
