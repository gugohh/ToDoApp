import React from "react";
import { Routes, Route } from "react-router-dom";

import NavBar from "../components/nav/NavBar";
import DcScreen from "../components/dc/DcScreen";
import MarvelScreen from "../components/marvel/MarvelScreen";
import SearchScreen from "../components/search/SearchScreen";
import HeroScreen from "../components/hero/HeroScreen";

const DashboardRoutes = () => {
  return (
    <>
      <NavBar />
      <div className="container">
        <Routes>
          <Route path="dc" element={<DcScreen />} />
          <Route path="marvel" element={<MarvelScreen />} />
          <Route path="hero" element={<HeroScreen />} />

          <Route path="search" element={<SearchScreen />} />

          <Route path="/" element={<MarvelScreen />} />
        </Routes>
      </div>
    </>
  );
};

export default DashboardRoutes;
